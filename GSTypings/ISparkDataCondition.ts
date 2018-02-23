interface ISparkDataCondition{
    and(that : ISparkDataCondition) : ISparkDataCondition
    negate() : ISparkDataCondition
    or(that : ISparkDataCondition) : ISparkDataCondition
}