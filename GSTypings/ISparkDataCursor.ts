interface ISparkDataCursor
{
    hasNext() : boolean
    next() : ISparkDataItem
}