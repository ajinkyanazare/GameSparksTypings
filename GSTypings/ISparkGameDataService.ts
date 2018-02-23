interface ISparkGameDataService{
    N(shortCode: string) : ISparkDataNumberOperand
    S(shortCode: string) : ISparkDataStringOperand
    createItem(type: string, id: string) : ISparkDataItem
    getItem(type:string, id: string) : ISparkDataResult
    queryItems(type: string, condition: ISparkDataCondition, sortOrder? : ISparkDataSortOrder) : ISparkDataQueryResult
    sort(shortCode: string, ascending: boolean) : ISparkDataSortOrder
}