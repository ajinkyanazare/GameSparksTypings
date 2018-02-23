interface ISparkDataItem{
    getTTL() : number
    getData() : JSON
    delete() : ISparkDataResult
    getId() : string
    persistor() : ISparkDataItemPersistor
    setData(data : JSON) : ISparkDataItem
    setTTL(ttl : number) : void
    getType() : string
    getValidationErrors() : string[]
}