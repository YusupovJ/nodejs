import { Request } from "express";

export interface IMyRequest extends Request {
	requestTime: number[];
}
