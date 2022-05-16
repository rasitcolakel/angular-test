export interface Currency {
    e: string;
    E: number;
    s: string;
    p: string;
    P: string;
    w: string;
    x: string;
    c: string;
    Q: string;
    b: string;
    B: string;
    a: string;
    A: string;
    o: string;
    h: string;
    l: string;
    v: string;
    q: string;
    O: number;
    C: number;
    F: number;
    L: number;
    n: number;
    changeType: ChangeTypeEnum;
}

export enum ChangeTypeEnum {
    INCREASE = 'increase',
    DECREASE = 'decrease',
    EQUAL = 'equal'
}
