exports.justify = (str, ln) => {
    e = 0
    output = ""
    str3 = str.split("<br><br>")
    while (e<str3.length) {
        var res = str3[e].split(" ")
        var ree = []    
        var i = j = 0

        while (i<res.length) {
            if(res[i].replace(/ /g,'')!='') {
                ree[j] = res[i].replace(/ /g, '') 
                j++
            }
            i++
        }

        lines = "";
        i = j = k = slice1 = 0
        var line = []
        var line2 = ""
        var leng = 0
        var tmp = ""
        var t = ln
        var re = ree
        var l = ree.length
        m = 0
        var slice = 0

        while(true){
            i = j = 0
            var line = []
            var line2 = ""
            var leng = 0        

            while(leng<t+1){
                
                af = re[i].length;

                if ( t-leng < af && leng != t) { 
                    while((j < t-leng+1) && (j <i-1)) {
                        line[j] += ' '
                        j++
                    }

                    line[i-1] = line[i-1].replace(/ /g,'')
                    nb = t-leng-i+2
                    if(nb>0){
                        line[i-2] += " ".repeat(nb)
                    }
                    slice1 = i
                    line[i-1] += "<br>"
                    break
                } 
                else if(leng == t)
                {
                    line[i-1] = line[i-1].replace(/ /g,'') + '<br>'
                    line[i-2] += " "
                    slice1 = i
                    break
                }
                else if(t-leng == af){
                    line[i] = re[i] + '<br>'
                    slice1 = i+1
                    break
                }
                else {
                    line[i] = re[i] + ' '
                    slice1 = i+1
                }
                leng += line[i].length
                i++
                if (re.length<=i){
                    break
                }
            }
            
            slice = slice + slice1 
            k = 0
            while(k < line.length){
                line2 = line2  +line[k]
                k++
            }
        
            line2 = line2.replace(/ /g, "&nbsp;")
            lines = lines + line2
            if(slice >= l){
                break
            }
            re=ree.slice(slice)
        }
        e++
        output = output + lines + '<br>'
    }
    return output
}