import lifemonth from "./lifemonth";

describe("2023/11/01 | Date | Expected months", () => {
    const birthA = "2023/11/01";

    const cases = [
        // 2023/11/01
        [birthA, "2023/11/01", 1],
        [birthA, "2023/11/30", 1],

        [birthA, "2023/12/01", 2],
        [birthA, "2023/12/31", 2],

        [birthA, "2024/01/01", 3],
        [birthA, "2024/01/31", 3],

        [birthA, "2024/02/01", 4],
        [birthA, "2024/02/29", 4],

        [birthA, "2024/03/01", 5],
        [birthA, "2024/03/31", 5],

        [birthA, "2024/04/01", 6],
        [birthA, "2024/04/30", 6],
    ];

    test.each(cases)(
        "%p | %p | %p month(s)",
        (birth, date, expected) => {
            expect(lifemonth(new Date(birth), new Date(date))).toEqual(expected);
        });
});

describe("2023/11/16 | Date | Expected months", () => {
    const birthB = "2023/11/16";

    const cases = [
        [birthB, "2023/11/01", 0],
        [birthB, "2023/11/15", 0],

        [birthB, "2023/11/16", 1],
        [birthB, "2023/11/30", 1],
        [birthB, "2023/12/01", 1],
        [birthB, "2023/12/15", 1],

        [birthB, "2023/12/16", 2],
        [birthB, "2023/12/31", 2],
        [birthB, "2024/01/01", 2],
        [birthB, "2024/01/15", 2],

        [birthB, "2024/01/16", 3],
        [birthB, "2024/01/29", 3],
        [birthB, "2024/02/01", 3],
        [birthB, "2024/02/15", 3],

        [birthB, "2024/02/16", 4],
        [birthB, "2024/02/30", 4],
        [birthB, "2024/03/01", 4],
        [birthB, "2024/03/15", 4],
    ];

    test.each(cases)(
        "%p | %p | %p month(s)",
        (birth, date, expected) => {
            expect(lifemonth(new Date(birth), new Date(date))).toEqual(expected);
        });
});
