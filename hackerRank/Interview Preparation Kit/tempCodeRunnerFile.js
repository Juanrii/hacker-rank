    let c = 0,
        ca = 0,
        r = n % s.length
        console.log(r)
  
    for (let i = s.length; i-- > 0;) {
      if (s.charAt(i) == 'a') {
        ++c
  
        if (i < r)
          ++ca
      }
    }
    // times = (newStr.match(/a/g) || []).length;
  
    return ((n - r) / s.length * c) + ca