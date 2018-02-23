interface ISparkDataStringOperand{
    between(low : JSON, high : JSON) : ISparkDataCondition
    eq(value : any) : ISparkDataCondition
    gt(value : any) : ISparkDataCondition
    in(values : Number[]) : ISparkDataCondition
    lt(value : any) : ISparkDataCondition
    ne(value : any) : ISparkDataCondition
    startsWith(value : string) : ISparkDataCondition
}