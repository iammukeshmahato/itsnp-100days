function loadImageFileAsURL()
  {
   var filesSelected = document.getElementById("fileid").files;
   if (filesSelected.length > 0)
   {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent)
    {
     var txtid = document.getElementById("txtid");

     txtid.innerHTML = fileLoadedEvent.target.result;
    };

    fileReader.readAsDataURL(fileToLoad);
   }
  }
