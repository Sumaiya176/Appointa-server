import { Response } from "express";
interface IResponse<T> {
    message: string | null;
    isSuccess: boolean | null;
    data: T | null;
}
export declare const sendResponse: <T>(res: Response, responseData: IResponse<T>) => void;
export {};
//# sourceMappingURL=sendResponse.d.ts.map