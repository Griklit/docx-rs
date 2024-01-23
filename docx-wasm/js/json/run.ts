import { DrawingJSON } from "./drawing";
import { ShapeJSON } from "./shape";
import {
  CommentRangeStartJSON,
  CommentRangeEndJSON,
  InsertJSONData,
  DeleteJSONData,
} from "..";
import { BorderType } from "../border";
import { VertAlignType } from "../run";
import { FieldChar } from "./bindings/FieldChar";
import { InstrHyperlink } from "./bindings/InstrHyperlink";
import { InstrToC } from "./bindings/InstrToC";

export type TextBorderJSON = {
  borderType: BorderType;
  size: number;
  space: number;
  color: string;
};

export type RunFontsJSON = {
  ascii?: string;
  hiAnsi?: string;
  eastAsia?: string;
  cs?: string;
  asciiTheme?: string;
  hiAnsiTheme?: string;
  eastAsiaTheme?: string;
  csTheme?: string;
  hint?: string;
};

export type RunPropertyJSON = {
  style?: string | null;
  sz?: number | null;
  szCs?: number | null;
  fonts?: RunFontsJSON | null;
  color?: string | null;
  highlight?: string | null;
  vertAlign?: VertAlignType | null;
  underline?: string | null;
  bold?: boolean | null;
  boldCs?: boolean | null;
  caps?: boolean | null;
  italic?: boolean | null;
  italicCs?: boolean | null;
  vanish?: boolean | null;
  specVanish?: boolean | null;
  characterSpacing?: number | null;
  textBorder?: TextBorderJSON | null;
  ins?: InsertJSONData | null;
  del?: DeleteJSONData | null;
  strike?: boolean;
};

export type RunChildJSON =
  | TextJSON
  | SymJSON
  | DeleteTextJSON
  | TabJSON
  | BreakJSON
  | DrawingJSON
  | ShapeJSON
  | CommentRangeStartJSON
  | CommentRangeEndJSON
  | FieldCharJSON
  | InstrTextStringJSON;

export type TextJSON = {
  type: "text";
  data: {
    preserveSpace: boolean;
    text: string;
  };
};

export type SymJSON = {
  type: "sym";
  data: {
    font: string;
    char: string;
  };
};

export type DeleteTextJSON = {
  type: "deleteText";
  data: {
    preserveSpace: boolean;
    text: string;
  };
};

export type TabJSON = {
  type: "tab";
};

export type BreakJSON = {
  type: "break";
  data: {
    breakType: "page" | "column" | "textWrapping";
  };
};

export type RunJSON = {
  type: "run";
  data: {
    runProperty: RunPropertyJSON;
    children: RunChildJSON[];
  };
};

export type FieldCharJSON = {
  type: "fieldChar";
  data: FieldChar;
};

export type InstrTextJSON = {
  type: "instrText";
  data:
    | {
        type: "hyperlink";
        data: InstrHyperlink;
      }
    | {
        type: "toc";
        data: InstrToC;
      };
};

export type InstrTextStringJSON = {
  type: "instrTextString";
  data: string;
};
