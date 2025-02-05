/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let n = s2.length;
    if (s1 == s2)
        return true;

     flag = false;
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            swap(s2[i], s2[j]);
            if (s1 == s2) {
                flag = true;
                break;
            }
            swap(s2[i], s2[j]);
        }
    }
    if (flag)
        return true;
    else 
        return false;
};