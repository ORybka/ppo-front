export enum PopupType {
    noApplications, createdApplication
}

export type PopupProps = {
    type: PopupType
}

export enum CabinetElementType {
    form, sent, transferred
}

export type CabinetElementProps = {
    type: CabinetElementType,
}