import { STRING } from "../constants/constants";

export default class Category {
  id: number;
  categoryCode: string;
  categoryName: string;
  urlImage: string;
  description: string;
  mass1Unit: string;
  mass2Unit: string;
  mass3Unit: string;
  mass1: number;
  mass2: number;
  mass3: number;
  quantity1: string;
  quantity2: string;
  quantity3: string;
  height: number;
  width: number;
  length: number;

  constructor(data: Partial<Category>) {
    this.id = data.id || 0;
    this.categoryCode = data.categoryCode || STRING.BLANK;
    this.categoryName = data.categoryName || STRING.BLANK;
    this.urlImage = data.urlImage || STRING.BLANK;
    this.description = data.description || STRING.BLANK;
    this.mass1Unit = data.mass1Unit || STRING.BLANK;
    this.mass2Unit = data.mass2Unit || STRING.BLANK;
    this.mass3Unit = data.mass3Unit || STRING.BLANK;
    this.mass1 = data.mass1 || 0;
    this.mass2 = data.mass2 || 0;
    this.mass3 = data.mass3 || 0;
    this.quantity1 = data.quantity1 || STRING.BLANK;
    this.quantity2 = data.quantity2 || STRING.BLANK;
    this.quantity3 = data.quantity3 || STRING.BLANK;
    this.height = data.height || 0;
    this.width = data.width || 0;
    this.length = data.length || 0;
  }
}
