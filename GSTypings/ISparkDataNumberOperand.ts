interface ISparkDataNumberOperand{
    between(low : JSON, high : JSON) : ISparkDataCondition
    eq(value : JSON) : ISparkDataCondition
    gt(value : JSON) : ISparkDataCondition
    in(values : Number[]) : ISparkDataCondition
    lt(value : JSON) : ISparkDataCondition
    ne(value: JSON) : ISparkDataCondition
}