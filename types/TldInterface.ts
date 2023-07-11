export interface TldInterface {
    _id?:string,
    id?:string,
    name?: string
    registerPrice?: number
    IsDocumentRequired?: boolean
    IsTransferable?: boolean
    MaxCharacterCount?: number
    MaxRegistrationPeriod?: number
    MinCharacterCount?: number
    MinRegistrationPeriod?: number
    RequiredDocumentInfo?: string
    promo?: boolean,
    domainModule?:string,
    promoRegisterPrice:number,
    promoRenewPrice:number,
    IdProtection?:boolean,
    NDSManagement?:boolean,
    promoPrice?: number
    status?: boolean,
    promoDate?:Date,
    listOrder?:number,
    renewPrice?: number
    transferPrice?: number
  }[]
