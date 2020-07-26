false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true 

// line 12 explanation
// 1. !true is false
// 2. (!(100 / 5) === 20) is false because !(100 / 5) is a boolean, and === always returns false when operands are different types.
// 3. ((328 / 4) === 82) is true
// 4. combine 1-3 as (false || false || true), which is true
// 5. using the value from item 4 results in true || false, which is true