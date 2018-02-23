interface ISparkDataItemPersistor{
    persist() : ISparkDataResult
    withAtomicIncrements() : ISparkDataItemPersistor
    withConditionCheck(condition : ISparkDataCondition) : ISparkDataItemPersistor
    withErrorOnTypeConversion() : ISparkDataItemPersistor
    withOverwrite() : ISparkDataItemPersistor
    withVersionCheck() : ISparkDataItemPersistor
}