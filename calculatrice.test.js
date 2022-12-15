const calcule = require("./calculatrice")

describe('test de la calculatrice avec les additions',()=>{
    
    test('adds 1+2 to equal 3',()=>{
        expect(calcule("1+2")).toBe("3");
    }),

    test('adds (1+2) to equal 3',()=>{
        expect(calcule("(1+2)")).toBe("3");
    }),
    test('adds (1+(2+4)) to equal 7',()=>{
        expect(calcule("(1+(2+4))")).toBe("7");
    }),
    test('adds (1+(2+4))+5 to equal 12',()=>{
        expect(calcule("(1+(2+4))+5")).toBe("12");
    }),
    test('adds (1+(2+4))+(5+2) to equal 14',()=>{
        expect(calcule("(1+(2+4))+(5+2)")).toBe("14");
    }),
    test('adds (1+(2+4))+(5+2+(1+2+3+4+5+6+7+8+9)) to equal 59',()=>{
        expect(calcule("(1+(2+4))+(5+2+(1+2+3+4+5+6+7+8+9))")).toBe("59");
    })
}),

describe("test de la calculatrice avec les soustraction",()=>{
    test("1-2 = -1",()=>{
        expect(calcule('1-2')).toBe("-1");
    }),
    test("1--2 = 3",()=>{
        expect(calcule('1--2')).toBe("3");
    }),
    test("1-+2 = -1",()=>{
        expect(calcule('1-+2')).toBe("-1");
    }),
    test('1+-2 = -1',()=>{
        expect(calcule('1+-2')).toBe('-1');
    }),
    test("(9-8)-1 = 0",()=>{
        expect(calcule('(9-8)-1')).toBe('0');
    }),
    test('(9-8)--(10-+5-(5-5)) = 11',()=>{
        expect(calcule('(9-8)--(10-+5-(5-5))')).toBe('6');
    })
}),

describe("test de la calculatrice avec la multiplication",()=>{
    test('1*2 = 3',()=>{
        expect(calcule("1*2")).toBe("2");
    }),
    test("(1*2) = 3",()=>{
        expect(calcule("(1*2)")).toBe('2');
    }),
    test('(1*-2) = -2',()=>{
        expect(calcule('(1*-2)')).toBe('-2');
    }),
    test("(1*-(2*5)) = -10",()=>{
        expect(calcule("(1*-(2*5))")).toBe("-10");
    }),
    test('2.25*(-1.75*+(2.56*(5.50--5.85)))*0.5+8.56 = -48.644',()=>{
        expect(calcule("2.25*(-1.75*+(2.56*(5.50--5.85)))*0.5+8.56")).toBe('-48.644')
    })
}),
describe("test de la calculatrice avec la division",()=>{
    test('1/2 = 0.5',()=>{
        expect(calcule("1/2")).toBe("0.5");
    }),
    test("(1/2+5) = 5.5",()=>{
        expect(calcule("(1/2+5)")).toBe('5.5');
    }),
    test("(1/2-5) = -4.5",()=>{
        expect(calcule("(1/2-5)")).toBe('-4.5');
    }),
    test('(1/-2) = -0.5',()=>{
        expect(calcule('(1/-2)')).toBe('-0.5');
    }),
    test("(1/-(2/5)) = -2.5",()=>{
        expect(calcule("(1/-(2/5))")).toBe("-2.5");
    }),
    test('2.25/(-1.75/+(2.56/(5.50--5.85)))/0.5+8.56 = 7.9800125865324105',()=>{
        expect(calcule("2.25/(-1.75/+(2.56/(5.50--5.85)))/0.5+8.56")).toBe('7.9800125865324105')
    })
    test('0/5 = 0',()=>{
        expect(calcule("0/5")).toBe('0');
    }),
    test("15/0 = Infinity",()=>{
        expect(calcule("15/0")).toBe("Infinity");
    })
}),
describe("test de la calculatrice avec le pourcentage",()=>{
    test('10%100 = 10',()=>{
        expect(calcule("10%100")).toBe("10");
    }),
    test("(10%100) = 10",()=>{
        expect(calcule("(10%100)")).toBe('10');
    }),
    test('(10%-100) = -10',()=>{
        expect(calcule('(10%-100)')).toBe('-10');
    }),
    test('(15.25%-56.45) = -8.608625',()=>{
        expect(calcule('(15.25%-56.45)')).toBe('-8.608625');
    })
    test("(15/-(87%25)*12) = -8.275862068965518",()=>{
        expect(calcule("(15/-(87%25)*12)")).toBe("-8.275862068965518");
    }),
    test('2.25/(-1.75/+(2.56%47/(5.50--5.85)))/0.5+8.56 = 8.287405915670233',()=>{
        expect(calcule("2.25/(-1.75/+(2.56%47/(5.50--5.85)))/0.5+8.56")).toBe('8.287405915670233')
    })
    test('0%15 = 0',()=>{
        expect(calcule("0%15")).toBe('0');
    }),
    test("15%0 = 0",()=>{
        expect(calcule("15%0")).toBe("0");
    })
}),

describe("test de la calculatrice avec les puissances et carrée",()=>{

    test('2^2 = 4',()=>{
        expect(calcule("2^2")).toBe("4");
    }),
    test("(2^2) = 4",()=>{
        expect(calcule("(2^2)")).toBe('4');
    }),
    test('(2^-2) = 0.25',()=>{
        expect(calcule('(2^-2)')).toBe('0.25');
    }),
    test('(15.25^-56.45) = 1.6010958214700218e-67',()=>{
        expect(calcule('(15.25^-56.45)')).toBe('1.6010958214700218e-67');
    })
    test("(15/-(87^4)*12) = -0.000003141922690164478",()=>{
        expect(calcule("(15/-(87^4)*12)")).toBe("-0.000003141922690164478");
    }),
    test('2,25/(-1,75/+(2,56^12/(5,50+5,85)))/0,5+8,56 = -17941.181035327358',()=>{
        expect(calcule("2.25/(-1.75/+(2.56^12/(5.50--5.85)))/0.5+8.56")).toBe('-17941.181035327358')
    })
    test('0^15 = 0',()=>{
        expect(calcule("0^15")).toBe('0');
    }),
    test("15^0 = 0",()=>{
        expect(calcule("15^0")).toBe("1");
    })
}),

describe("test de la calculatrice avec les racines carrées",()=>{

    test('sqrt(4) = 2',()=>{
        expect(calcule("sqrt(4)")).toBe("2");
    }),
    test('sqrt(-4) = 2',()=>{
        expect(calcule("sqrt(-4)")).toBe("2");
    }),
    test('sqrt(2) = 1.4142135623730951',()=>{
        expect(calcule("sqrt(2)")).toBe("1.4142135623730951");
    }),
    test('sqrt(2.5) = 1.5811388300841898',()=>{
        expect(calcule("sqrt(2.5)")).toBe("1.5811388300841898");
    }),
    test('sqrt(2+9*2) = 4.47213595499958',()=>{
        expect(calcule("sqrt(2+9*2)")).toBe("4.47213595499958");
    })


})