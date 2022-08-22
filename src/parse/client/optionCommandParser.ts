import parsimmon from "parsimmon";
import OptionCommand from "../../OptionCommand";
import boolean from "../util/boolean";
import number from "../util/number";
import space from "../util/space";
import spaceOpt from "../util/spaceOpt";

const { alt, custom, sepBy, sepBy1, seq, string } = parsimmon;

interface Option {
  min?: number;
  max?: number;
  options?: string[];
  defaultValue?: boolean | number | string;
}

/** Parses the option type name. */
const type = string("type")
  .skip(space)
  .then(
    alt(string("check"), string("spin"), string("combo"), string("button"), string("string")).skip(
      spaceOpt
    )
  );

/**
 * Parses a variable length string that terminates either when the next option field type
 * name is found or the end of the line is reached.
 */
const fieldString = custom<string>((success) => (input, i) => {
  const index = input.slice(i).search(/[ \t]+(min|max|var|default)/);
  const indexOrEnd = index === -1 ? input.length : i + index;

  return success(indexOrEnd, input.substring(i, indexOrEnd));
});

/** Parses option field information into a structure suitable for later use. */
const fields = sepBy(
  alt(
    // min is always a number
    string("min")
      .skip(space)
      .then(number)
      .map<Option>((min) => ({ min })),

    // max is always a number
    string("max")
      .skip(space)
      .then(number)
      .map<Option>((max) => ({ max })),

    // `var` can be a sequence each containing a string, each delimited by whitespace.
    sepBy1(string("var").skip(space).then(fieldString), space).map<Option>((options) => ({
      options,
    })),

    // `default` can be a boolean, a number or a string.
    string("default")
      .skip(space)
      .then(alt(boolean, number, fieldString))
      .map<Option>((defaultValue) => ({ defaultValue }))
  ),
  space
).map((options) => {
  const final: Record<string, unknown> = {};

  for (const option of options) {
    for (const [key, value] of Object.entries(option)) {
      if (value !== undefined) {
        final[key] = value;
      }
    }
  }

  return final as Option;
});

export default seq(
  string("option")
    .skip(space)
    .skip(string("name"))
    .skip(space)
    .then(
      custom<string>((success) => (input, i) => {
        const index = input.slice(i).search(/[ \t]+(type)/);
        const indexOrEnd = index === -1 ? input.length : i + index;

        return success(indexOrEnd, input.substring(i, indexOrEnd));
      })
    )
    .skip(space),
  type,
  fields
).map(
  ([name, kind, options]) =>
    new OptionCommand(name, kind, options.min, options.max, options.options, options.defaultValue)
);
