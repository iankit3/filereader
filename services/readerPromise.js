class Reader{
    static readFile(files){
        return new Promise(function (resolve, reject) {
            var file = files[0];
                if (file.type.match( /text.*/ )) {
                    var reader = new FileReader();
                    reader.onload  = ( (e) => {
                       resolve( reader.result);         
                    })
                    reader.readAsText(file);	
                } else reject(Error("File not supported!"));
          })
    }
}

export default Reader;