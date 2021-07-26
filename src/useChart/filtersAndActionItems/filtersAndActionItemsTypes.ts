import { FunctionComponent } from "react";

export type IExcelDownloadComponent = FunctionComponent;
export type IPngDownloadComponent = FunctionComponent;
export type IAddToDashboardComponent = FunctionComponent;

export interface IFiltersAndActionItems {
    ExcelDownload: IExcelDownloadComponent;
    PngDownload: IPngDownloadComponent;
    AddToDashboard: IAddToDashboardComponent;
}
