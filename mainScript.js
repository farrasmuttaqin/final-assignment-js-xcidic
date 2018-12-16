/* eslint-disable strict*/
"use strict";

(function() {
   
  // loading animation
  function loader(tampung){
    var table = document.getElementsByClassName('content main')[0]
    var loader = document.createElement('div')
    var p = document.createElement('p')
    var preloader = document.createElement('div')
    var spinner = document.createElement('div')
    var circleLeft = document.createElement('div')
    var circleRight = document.createElement('div')
    var circle1 = document.createElement('div')
    var circle2 = document.createElement('div')

    loader.setAttribute('class','loader')
    loader.setAttribute('id','loaderID')
    preloader.setAttribute('class','preloader')
    spinner.setAttribute('class','spinner-layer pl-red')
    circleLeft.setAttribute('class','circle-clipper left')
    circleRight.setAttribute('class','circle-clipper right')
    circle1.setAttribute('class','circle')
    circle2.setAttribute('class','circle')

    loader.style.textAlign = "center"
    loader.style.marginTop = "20%"
    preloader.style.height = "100px"
    preloader.style.width = "100px"

    p.style.marginTop = "20px"

    console.log(tampung)
    if(tampung == undefined){
      p.innerText="Please wait.."
    }else{
      p.innerText="There is no connection, please reconnect and try again.."
    }

    circleLeft.appendChild(circle1)
    circleRight.appendChild(circle2)
    spinner.appendChild(circleLeft)
    spinner.appendChild(circleRight)
    preloader.appendChild(spinner)
    loader.appendChild(preloader)
    loader.appendChild(p)

    table.appendChild(loader)
  }

  //tampilkan normal loader
  function checkLoader(){
    var myNode = document.getElementById("loaderID");
    if (!myNode){
      loader()
    }
  }

  //tampilkan loader jika error
  function checkLoaderError(){
    var myNode = document.getElementById("loaderID");
    if (!myNode){
      var a=1;
      loader(a)
    }
  }
	
	//hilangkan loading
  function removeLoader(){
    var myNode2 = document.getElementById("loaderID");
    if(myNode2){
      while (myNode2.firstChild) {
        myNode2.removeChild(myNode2.firstChild);
      }
      myNode2.remove()
    }
  }

	//membersihkan content
  function clearContent(){
    var myNode = document.getElementsByClassName("content main")[0];
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

  //hilangkan script CKE
  function clearCKE(){
    var checkIdCKE = document.getElementById('ckeID')
    if (checkIdCKE){
        checkIdCKE.remove();
    }
  }
  
  // Buat function error
  function tampungError(error) {

    removeLoader()
    clearContent()
    clearCKE()
    checkLoaderError()
  }
	
	//Fungsi tampilkan page Edit Category
  function editCategory(response){

    clearContent()
    var data = response.data
    var idCategory = data._id
    checkLoader()
    setTimeout(function() { 
      removeLoader()
      
      var containerFluid = document.createElement('div')
      containerFluid.setAttribute('class','container-fluid')
      //konten Title All Articles

      var rowClearFix = document.createElement('div')
      rowClearFix.setAttribute('class','row clearfix')

      // COLUMN EDIT KIRI

      var colRight = document.createElement('div')
      colRight.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')
      var cardRight = document.createElement('div')
      cardRight.setAttribute('class','card')
      var headerRight = document.createElement('div')
      headerRight.setAttribute('class','header')
      var h2Right = document.createElement('h2')
      h2Right.innerText = "EDIT CATEGORY"
      headerRight.appendChild(h2Right)

      var bodyRight = document.createElement('div')
      bodyRight.setAttribute('class','body')
      var formRight = document.createElement('form')
      formRight.setAttribute('class','form-horizontal')
      formRight.setAttribute('id','form-edit')

      var rowClearFixRight = document.createElement('div')
      rowClearFixRight.setAttribute('class','row clearfix')
      var colRight2 = document.createElement('div')
      colRight2.setAttribute('class','col-xs-12 ol-sm-12 col-md-12 col-lg-12')

      //0 
      var rowClearFix3 = document.createElement('div')
      rowClearFix3.setAttribute('class','row clearfix')
      var column31 = document.createElement('div')
      column31.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
      var label3 = document.createElement('label')
      label3.style.fontSize = "18px"
      label3.innerText = "Article Category :"
      column31.appendChild(label3)

      var column32 = document.createElement('div')
      column32.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
      var formGroup3 = document.createElement('div')
      formGroup3.setAttribute('class','form-group title')
      var formLine3 = document.createElement('div')
      formLine3.setAttribute('class','form-line title')

      var input43 = document.createElement('input')
      input43.setAttribute('class','form-control title')
      input43.setAttribute('type','text')
      input43.setAttribute('value',data.title)
      input43.setAttribute('readonly','readonly')
      input43.setAttribute('required','required')
      formLine3.appendChild(input43)
      formGroup3.appendChild(formLine3)
      column32.appendChild(formGroup3)

      rowClearFix3.appendChild(column31)
      rowClearFix3.appendChild(column32)
      
      //1 INPUT TITLE

      var rowClearFix2 = document.createElement('div')
      rowClearFix2.setAttribute('class','row clearfix')
      var column21 = document.createElement('div')
      column21.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
      var label2 = document.createElement('label')
      label2.innerText = "Change To"
      column21.appendChild(label2)

      var column22 = document.createElement('div')
      column22.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
      var formGroup2 = document.createElement('div')
      formGroup2.setAttribute('class','form-group title')
      var formLine2 = document.createElement('div')
      formLine2.setAttribute('class','form-line title')

      var input33 = document.createElement('input')
      input33.setAttribute('class','form-control title')
      input33.setAttribute('type','text')
      input33.setAttribute('id','title')
      input33.setAttribute('placeholder','Article category must be unique*')
      input33.setAttribute('required','required')
      formLine2.appendChild(input33)
      formGroup2.appendChild(formLine2)
      column22.appendChild(formGroup2)

      rowClearFix2.appendChild(column21)
      rowClearFix2.appendChild(column22)

      //4 BUTTON

      var rowClearFix5 = document.createElement('div')
      rowClearFix5.setAttribute('class','row clearfix')
      var column51 = document.createElement('div')
      column51.setAttribute('class','col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5')
      column51.style.textAlign = "center"

      var button4 = document.createElement('button')
      button4.setAttribute('type','button')
      button4.setAttribute('class','btn btn-warning m-t-15')
      button4.setAttribute('id','backback')
      button4.style.width="150px"
      button4.style.fontSize="16px"
      button4.innerText = "Back"
      column51.appendChild(button4)

      var button5 = document.createElement('button')
      button5.setAttribute('type','submit')
      button5.setAttribute('class','btn btn-success m-t-15')
      button5.setAttribute('id','ubahArticle')
      button5.style.width="150px"
      button5.style.fontSize="16px"
      button5.style.marginLeft = "20px"
      button5.innerText = "Apply Changes"
      column51.appendChild(button5)
      
      rowClearFix5.appendChild(column51)
      
      colRight2.appendChild(rowClearFix3)
      colRight2.appendChild(rowClearFix2)
      colRight2.appendChild(rowClearFix5)

      rowClearFixRight.appendChild(colRight2)

      formRight.appendChild(rowClearFixRight)
      bodyRight.appendChild(formRight)

      cardRight.appendChild(headerRight)
      cardRight.appendChild(bodyRight)

      colRight.appendChild(cardRight)

      rowClearFix.appendChild(colRight)

      containerFluid.appendChild(rowClearFix)

      var mainContent = document.getElementsByClassName('content main')[0]
      mainContent.appendChild(containerFluid)
        
      var back = document.getElementById('backback')
      back.addEventListener('click',function(){
          var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
          panggilAxiosCategories(API_URL)
      })

      var ubah = document.getElementById('form-edit')
      ubah.addEventListener("submit", function(event) {

        let tampungCategory=0;

        var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/";
        axios
          .get(API_URL)
          .then(function(responses){
            var datas = responses.data
            
            for( let totalCategories = 0 ;totalCategories<datas.length;totalCategories++){
              var judul = document.getElementById('title').value
              if (datas[totalCategories].title.toLowerCase() == judul.toLowerCase()){
                tampungCategory = 1;
              }
            }
            if(tampungCategory == 0){
              var answer = confirm("Do you really want to edit this article category ?");
              if (answer) {
                var judul = document.getElementById('title').value
                var categoryUrl = "https://bookmarks-apis.herokuapp.com/api/article-categories/"+idCategory+"/"
                axios
                .put(categoryUrl, {
                  title: judul
                })
                .then()
                .catch(tampungError);
                
                editCategoryPlus();
                event.preventDefault()
              }else{
                event.preventDefault()
              }
            }else{
              alert("Sorry, this category title already exists")
              event.preventDefault()
            }
          })
          .catch(tampungError)
          event.preventDefault()
      });
      
    }, 200);
  }
	
	//fungsi tampilkan page edit article
  function editArticle(response){

    clearContent()
    var data = response.data
    var idArticle = data._id
    checkLoader()
    setTimeout(function() { 
      removeLoader()
      
      var containerFluid = document.createElement('div')
      containerFluid.setAttribute('class','container-fluid')
      //konten Title All Articles

      var rowClearFix = document.createElement('div')
      rowClearFix.setAttribute('class','row clearfix')

      var colLeft = document.createElement('div')
      colLeft.setAttribute('class','col-lg-6 col-md-6 col-sm-12 col-xs-12')
      var cardLeft = document.createElement('div')
      cardLeft.setAttribute('class','card')
      var headerLeft = document.createElement('div')
      headerLeft.setAttribute('class','header')
      headerLeft.style.textAlign = "center"
      var h3Title = document.createElement('h3')
      h3Title.innerText = data.title
      var h2Category = document.createElement('h2')
      h2Category.innerText = data.categories[0].title

      headerLeft.appendChild(h3Title)
      headerLeft.appendChild(h2Category)

      var bodyLeft= document.createElement('div')
      bodyLeft.setAttribute('class','body')
      var rowClearFixLeft = document.createElement('div')
      rowClearFixLeft.setAttribute('class','row clearfix')
      var leftContent = document.createElement('div')
      leftContent.setAttribute('class','col-xs-12 ol-sm-12 col-md-12 col-lg-12')
      leftContent.innerHTML = data.description

      rowClearFixLeft.appendChild(leftContent)
      bodyLeft.appendChild(rowClearFixLeft)

      cardLeft.appendChild(headerLeft)
      cardLeft.appendChild(bodyLeft)
      colLeft.appendChild(cardLeft)
      
      // COLUMN EDIT KIRI

      var colRight = document.createElement('div')
      colRight.setAttribute('class','col-lg-6 col-md-6 col-sm-12 col-xs-12')
      var cardRight = document.createElement('div')
      cardRight.setAttribute('class','card')
      var headerRight = document.createElement('div')
      headerRight.setAttribute('class','header')
      var h2Right = document.createElement('h2')
      h2Right.innerText = "EDIT ARTICLE"
      headerRight.appendChild(h2Right)

      var bodyRight = document.createElement('div')
      bodyRight.setAttribute('class','body')
      var formRight = document.createElement('form')
      formRight.setAttribute('class','form-horizontal')
      formRight.setAttribute('id','form-edit')

      var rowClearFixRight = document.createElement('div')
      rowClearFixRight.setAttribute('class','row clearfix')
      var colRight2 = document.createElement('div')
      colRight2.setAttribute('class','col-xs-12 ol-sm-12 col-md-12 col-lg-12')

      //1 INPUT TITLE

      var rowClearFix2 = document.createElement('div')
      rowClearFix2.setAttribute('class','row clearfix')
      var column21 = document.createElement('div')
      column21.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
      var label2 = document.createElement('label')
      label2.innerText = "Title"
      column21.appendChild(label2)

      var column22 = document.createElement('div')
      column22.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
      var formGroup2 = document.createElement('div')
      formGroup2.setAttribute('class','form-group title')
      var formLine2 = document.createElement('div')
      formLine2.setAttribute('class','form-line title')
      var input2 = document.createElement('input')
      input2.setAttribute('class','form-control title')
      input2.setAttribute('type','text')
      input2.setAttribute('id','title')
      input2.setAttribute('required','required')
      formLine2.appendChild(input2)
      formGroup2.appendChild(formLine2)
      column22.appendChild(formGroup2)

      rowClearFix2.appendChild(column21)
      rowClearFix2.appendChild(column22)

      //2 SELECT CATEGORY

      var rowClearFix3 = document.createElement('div')
      rowClearFix3.setAttribute('class','row clearfix')
      var column31 = document.createElement('div')
      column31.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
      var label3 = document.createElement('label')
      label3.innerText = "Category"
      column31.appendChild(label3)

      var column32 = document.createElement('div')
      column32.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
      var formGroup3 = document.createElement('div')
      formGroup3.setAttribute('class','form-group')
      var formLine3 = document.createElement('div')
      formLine3.setAttribute('class','form-line')
      var select3 = document.createElement('select')
      select3.setAttribute('class','form-control show-tick')
      select3.setAttribute('id','category')
      select3.setAttribute('required','required')
      //loop
      var option3=document.createElement('option')
      option3.setAttribute('value','')
      option3.innerText="Select Category.."
      select3.appendChild(option3)
      //end

      var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/";
      axios
        .get(API_URL)
        .then(function(responses){
          var data = responses.data
          for( var totalCategories = 0 ;totalCategories<data.length;totalCategories++){
            var titleOption = document.createElement('option')
            titleOption.setAttribute('value',data[totalCategories]._id)
            titleOption.innerText = data[totalCategories].title
            select3.appendChild(titleOption)
          }
        })
        .catch(tampungError)

      formLine3.appendChild(select3)
      formGroup3.appendChild(formLine3)
      column32.appendChild(formGroup3)

      rowClearFix3.appendChild(column31)
      rowClearFix3.appendChild(column32)

      //3 CKE EDITOR CONTENT

      var rowClearFix4 = document.createElement('div')
      rowClearFix4.setAttribute('class','row clearfix')
      var column41 = document.createElement('div')
      column41.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
      var label4 = document.createElement('label')
      label4.innerText = "Content"
      column41.appendChild(label4)

      var column42 = document.createElement('div')
      column42.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
      var formGroup4 = document.createElement('div')
      formGroup4.setAttribute('class','form-group content')
      var formLine4 = document.createElement('div')
      formLine4.setAttribute('class','form-line content')
      
      var textArea4 = document.createElement('textarea')
      textArea4.setAttribute('id','isi')
      textArea4.setAttribute('class','form-control content')

      formLine4.appendChild(textArea4)
      formGroup4.appendChild(formLine4)
      column42.appendChild(formGroup4)

      rowClearFix4.appendChild(column41)
      rowClearFix4.appendChild(column42)

      //4 BUTTON

      var rowClearFix5 = document.createElement('div')
      rowClearFix5.setAttribute('class','row clearfix')
      var column51 = document.createElement('div')
      column51.setAttribute('class','col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5')
      column51.style.textAlign = "center"

      var button4 = document.createElement('button')
      button4.setAttribute('type','button')
      button4.setAttribute('class','btn btn-warning m-t-15')
      button4.setAttribute('id','backback')
      button4.style.width="150px"
      button4.style.fontSize="16px"
      button4.innerText = "Back"
      column51.appendChild(button4)

      var button5 = document.createElement('button')
      button5.setAttribute('type','submit')
      button5.setAttribute('class','btn btn-success m-t-15')
      button5.setAttribute('id','ubahArticle')
      button5.style.width="150px"
      button5.style.fontSize="16px"
      button5.style.marginLeft = "20px"
      button5.innerText = "Apply Changes"
      column51.appendChild(button5)
      
      rowClearFix5.appendChild(column51)

      colRight2.appendChild(rowClearFix2)
      colRight2.appendChild(rowClearFix3)
      colRight2.appendChild(rowClearFix4)
      colRight2.appendChild(rowClearFix5)

      rowClearFixRight.appendChild(colRight2)

      formRight.appendChild(rowClearFixRight)
      bodyRight.appendChild(formRight)

      cardRight.appendChild(headerRight)
      cardRight.appendChild(bodyRight)

      colRight.appendChild(cardRight)

      rowClearFix.appendChild(colLeft)
      rowClearFix.appendChild(colRight)

      containerFluid.appendChild(rowClearFix)

      var mainContent = document.getElementsByClassName('content main')[0]
      mainContent.appendChild(containerFluid)

      var ckeEditor = document.createElement('script')
      ckeEditor.innerText = "CKEDITOR.replace('isi')"
      ckeEditor.setAttribute('id','ckeID')
      document.body.appendChild(ckeEditor)
        
      var back = document.getElementById('backback')
      back.addEventListener('click',function(){
          var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
          panggilAxiosArticles(API_URL)
      })

      var ubah = document.getElementById('form-edit')
      ubah.addEventListener("submit", function(event) {
        var answer = confirm("Do you really want to edit this article ?");
        if (answer) {
          
          var judul = document.getElementById('title').value
          var kategori = document.getElementById('category').value
          
          var isi = CKEDITOR.instances["isi"].getData();
          var articleUrl = "https://bookmarks-apis.herokuapp.com/api/articles/"+idArticle+"/"

          axios
            .put(articleUrl, {
              title: judul,
              description: isi,
              categories: [kategori]
            })
            .then()
            .catch(tampungError);

          editArticlePlus();
          event.preventDefault()
        }else{
          event.preventDefault()
        }
      });
      
    }, 200);
  }

	//fungsi tampilkan detail article
  function detailArticle(response){
    clearContent()
    var data = response.data
    checkLoader()
    setTimeout(function() { 
      removeLoader()
      
      var containerFluid = document.createElement('div')
      containerFluid.setAttribute('class','container-fluid')
      //konten Title All Articles

      var blockHeaderLeft = document.createElement('div')
      blockHeaderLeft.setAttribute('class','block-header')
      blockHeaderLeft.style.cssFloat = "left"

      var blockHeaderRight = document.createElement('div')
      blockHeaderRight.setAttribute('class','block-header')
      blockHeaderRight.style.cssFloat = "right"

      var h2BlockLeft = document.createElement('h2')
      h2BlockLeft.innerText = "Created On : "+data.created

      var h2BlockRight = document.createElement('h2')

      var inisiasiUpdate = data.updated
      if (inisiasiUpdate == undefined){
        inisiasiUpdate = "Never Updated"
      }else{
        inisiasiUpdate = data.updated
      }
      h2BlockRight.innerText = "Last Updated : "+inisiasiUpdate

      blockHeaderLeft.appendChild(h2BlockLeft)
      blockHeaderRight.appendChild(h2BlockRight)

      //

      var rowClearFix =document.createElement('div')
      rowClearFix.setAttribute('class','row clearfix')

      var manyCol = document.createElement('div')
      manyCol.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')

      var card = document.createElement('div')
      card.setAttribute('class','card')

      var header = document.createElement('div')
      header.setAttribute('class','header')
      header.style.textAlign = "center"

      var h3Title = document.createElement('h3')
      h3Title.innerText = data.title

      var h2Category = document.createElement('h2')
      h2Category.innerText = '"'+data.categories[0].title+'"'

      header.appendChild(h3Title)
      header.appendChild(h2Category)

      //

      var body = document.createElement('div')
      body.setAttribute('class','body')
      body.innerHTML = data.description

      //

      var bodyButton = document.createElement('div')
      bodyButton.setAttribute('class','body 3button')
      
      var buttonDemo = document.createElement('div')
      buttonDemo.setAttribute('class','button-demo')
      buttonDemo.style.textAlign = "center"

      var colsm41 = document.createElement('div')
      colsm41.setAttribute('class','col-sm-4')
      var button41 = document.createElement('button')
      button41.setAttribute('class','btn btn-success waves-effect')
      button41.setAttribute('type','button')
      button41.setAttribute('id','backButton')
      button41.innerText = "BACK"

      var colsm42 = document.createElement('div')
      colsm42.setAttribute('class','col-sm-4')
      var button42 = document.createElement('button')
      button42.setAttribute('class','btn btn-warning waves-effect')
      button42.setAttribute('type','button')
      button42.setAttribute('id','editButton')
      button42.innerText = "EDIT"

      var colsm43 = document.createElement('div')
      colsm43.setAttribute('class','col-sm-4')
      var button43 = document.createElement('button')
      button43.setAttribute('class','btn btn-danger waves-effect')
      button43.setAttribute('type','button')
      button43.setAttribute('id','deleteButtons')
      button43.innerText = "DELETE"

      colsm41.appendChild(button41)
      colsm42.appendChild(button42)
      colsm43.appendChild(button43)

      buttonDemo.appendChild(colsm41)
      buttonDemo.appendChild(colsm42)
      buttonDemo.appendChild(colsm43)

      bodyButton.appendChild(buttonDemo)

      //

      card.appendChild(header)
      card.appendChild(body)
      card.appendChild(bodyButton)
      
      //

      manyCol.appendChild(card)
      rowClearFix.appendChild(manyCol)

      containerFluid.appendChild(blockHeaderLeft)
      containerFluid.appendChild(blockHeaderRight)
      containerFluid.appendChild(rowClearFix)

      var mainContent = document.getElementsByClassName('content main')[0]
      mainContent.appendChild(containerFluid)
      
      var backButton = document.getElementById('backButton')
      backButton.addEventListener('click',function(){
        var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
        panggilAxiosArticles(API_URL)
      })

      var editButton = document.getElementById('editButton')
      editButton.addEventListener('click',function(){
        var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+data._id+"/"
        panggilAxiosEditArticle(API_URL)
      })

      var deleteButton = document.getElementById('deleteButtons')
      deleteButton.addEventListener('click',function(){
        var answer = confirm('Do you really want to delete this article ?');
          if (answer){
            var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+data._id+"/"
            axios
              .delete(API_URL)
              .then()
              .catch(tampungError);
            deleteArticlePlus()
          }
      })
    }, 200);
  }

	//fungsi tampilkan page delete categories
  function deleteCategoryPlus(){

    clearContent()
    checkLoader()

    setTimeout(function() { 
      removeLoader()

    var containerFluid = document.createElement('div')
    containerFluid.setAttribute('class','container-fluid')
    //konten Title All Articles

    var alertS = document.createElement('div')
    alertS.setAttribute('class','alert alert-success')

    var p = document.createElement('p')
    p.style.fontSize = "20px"
    var strongs = document.createElement('strong')
    strongs.innerText = "It's Deleted !"
    p.appendChild(strongs)

    var spanT = document.createElement('span')
    spanT.innerText = " Your Article Category Has Been Succesfully Deleted"
    p.appendChild(spanT)

    alertS.appendChild(p)

    var buttonDemo = document.createElement('div')
    buttonDemo.setAttribute('class','button-demo')
    buttonDemo.style.marginTop = "5%"

    var col1 = document.createElement('div')
    col1.setAttribute('class','col-sm-4')

    var col3 = document.createElement('div')
    col3.setAttribute('class','col-sm-4')
    col3.style.textAlign = "center"
    var infoBox3 = document.createElement('div')
    infoBox3.setAttribute('class','info-box bg-green hover-expand-effect')
    infoBox3.setAttribute('id','seeAllCategories')
    var icon3 = document.createElement('div')
    icon3.setAttribute('class','icon')
    var materialIcon3 = document.createElement('i')
    materialIcon3.setAttribute('class','material-icons')
    materialIcon3.innerText = "library_books"
    icon3.appendChild(materialIcon3)

    var content3 = document.createElement('div')
    content3.setAttribute('class','content')
    content3.style.padding = "9px 10px"
    var text3 = document.createElement('div')
    text3.setAttribute('class','text')
    text3.style.fontSize = "20px"
    text3.style.paddingTop = "5px"
    text3.innerText = "See All Article Categories"
    content3.appendChild(text3)

    infoBox3.appendChild(icon3)
    infoBox3.appendChild(content3)
    col3.appendChild(infoBox3)

    var col4 = document.createElement('div')
    col4.setAttribute('class','col-sm-4')

    buttonDemo.appendChild(col1)
    buttonDemo.appendChild(col3)
    buttonDemo.appendChild(col4)

    containerFluid.appendChild(alertS)
    containerFluid.appendChild(buttonDemo)

    var mainContent = document.getElementsByClassName('content main')[0]
    mainContent.appendChild(containerFluid)

    var seeAllArticleCategories = document.getElementById('seeAllCategories')
    seeAllArticleCategories.addEventListener('click',function(){
        var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
        panggilAxiosCategories(API_URL)
    })
  }, 700);
}

	//fungsi tampilkan page delete artikel
  function deleteArticlePlus(){

    clearContent()
    checkLoader()

    setTimeout(function() { 
      removeLoader()

    var containerFluid = document.createElement('div')
    containerFluid.setAttribute('class','container-fluid')
    //konten Title All Articles

    var alertS = document.createElement('div')
    alertS.setAttribute('class','alert alert-success')

    var p = document.createElement('p')
    p.style.fontSize = "20px"
    var strongs = document.createElement('strong')
    strongs.innerText = "It's Deleted !"
    p.appendChild(strongs)

    var spanT = document.createElement('span')
    spanT.innerText = " Your Article Has Been Succesfully Deleted"
    p.appendChild(spanT)

    alertS.appendChild(p)

    var buttonDemo = document.createElement('div')
    buttonDemo.setAttribute('class','button-demo')
    buttonDemo.style.marginTop = "5%"

    var col1 = document.createElement('div')
    col1.setAttribute('class','col-sm-4')

    var col3 = document.createElement('div')
    col3.setAttribute('class','col-sm-4')
    col3.style.textAlign = "center"
    var infoBox3 = document.createElement('div')
    infoBox3.setAttribute('class','info-box bg-green hover-expand-effect')
    infoBox3.setAttribute('id','seeAllArticles')
    var icon3 = document.createElement('div')
    icon3.setAttribute('class','icon')
    var materialIcon3 = document.createElement('i')
    materialIcon3.setAttribute('class','material-icons')
    materialIcon3.innerText = "library_books"
    icon3.appendChild(materialIcon3)

    var content3 = document.createElement('div')
    content3.setAttribute('class','content')
    content3.style.padding = "9px 10px"
    var text3 = document.createElement('div')
    text3.setAttribute('class','text')
    text3.style.fontSize = "20px"
    text3.style.paddingTop = "5px"
    text3.innerText = "See All Articles"
    content3.appendChild(text3)

    infoBox3.appendChild(icon3)
    infoBox3.appendChild(content3)
    col3.appendChild(infoBox3)

    var col4 = document.createElement('div')
    col4.setAttribute('class','col-sm-4')

    buttonDemo.appendChild(col1)
    buttonDemo.appendChild(col3)
    buttonDemo.appendChild(col4)

    containerFluid.appendChild(alertS)
    containerFluid.appendChild(buttonDemo)

    var mainContent = document.getElementsByClassName('content main')[0]
    mainContent.appendChild(containerFluid)

    var seeAllArticles = document.getElementById('seeAllArticles')
    seeAllArticles.addEventListener('click',function(){
        var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
        panggilAxiosArticles(API_URL)
    })
  }, 700);
}

	//fungsi tampilkan page berhasil edit category
function editCategoryPlus(){

  clearContent()
  checkLoader()

  setTimeout(function() { 
    removeLoader()

  var containerFluid = document.createElement('div')
  containerFluid.setAttribute('class','container-fluid')
  //konten Title All Articles

  var alertS = document.createElement('div')
  alertS.setAttribute('class','alert alert-success')

  var p = document.createElement('p')
  p.style.fontSize = "20px"
  var strongs = document.createElement('strong')
  strongs.innerText = "It's Changed !"
  p.appendChild(strongs)

  var spanT = document.createElement('span')
  spanT.innerText = " Your Article Category Has Been Succesfully Updated"
  p.appendChild(spanT)

  alertS.appendChild(p)

  var buttonDemo = document.createElement('div')
  buttonDemo.setAttribute('class','button-demo')
  buttonDemo.style.marginTop = "5%"

  var col1 = document.createElement('div')
  col1.setAttribute('class','col-sm-4')

  var col3 = document.createElement('div')
  col3.setAttribute('class','col-sm-4')
  col3.style.textAlign = "center"
  var infoBox3 = document.createElement('div')
  infoBox3.setAttribute('class','info-box bg-green hover-expand-effect')
  infoBox3.setAttribute('id','seeAllCategories')
  var icon3 = document.createElement('div')
  icon3.setAttribute('class','icon')
  var materialIcon3 = document.createElement('i')
  materialIcon3.setAttribute('class','material-icons')
  materialIcon3.innerText = "library_books"
  icon3.appendChild(materialIcon3)

  var content3 = document.createElement('div')
  content3.setAttribute('class','content')
  content3.style.padding = "9px 10px"
  var text3 = document.createElement('div')
  text3.setAttribute('class','text')
  text3.style.fontSize = "20px"
  text3.style.paddingTop = "5px"
  text3.innerText = "See All Article Categories"
  content3.appendChild(text3)

  infoBox3.appendChild(icon3)
  infoBox3.appendChild(content3)
  col3.appendChild(infoBox3)

  var col4 = document.createElement('div')
  col4.setAttribute('class','col-sm-4')

  buttonDemo.appendChild(col1)
  buttonDemo.appendChild(col3)
  buttonDemo.appendChild(col4)

  containerFluid.appendChild(alertS)
  containerFluid.appendChild(buttonDemo)

  var mainContent = document.getElementsByClassName('content main')[0]
  mainContent.appendChild(containerFluid)

  var seeAllCategories= document.getElementById('seeAllCategories')
  seeAllCategories.addEventListener('click',function(){
      var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
      panggilAxiosCategories(API_URL)
  })
}, 700);
}


	//fungsi tampilkan page berhasil edit artikel
  function editArticlePlus(){

    clearContent()
    checkLoader()

    setTimeout(function() { 
      removeLoader()

    var containerFluid = document.createElement('div')
    containerFluid.setAttribute('class','container-fluid')
    //konten Title All Articles

    var alertS = document.createElement('div')
    alertS.setAttribute('class','alert alert-success')

    var p = document.createElement('p')
    p.style.fontSize = "20px"
    var strongs = document.createElement('strong')
    strongs.innerText = "It's Changed !"
    p.appendChild(strongs)

    var spanT = document.createElement('span')
    spanT.innerText = " Your Article Has Been Succesfully Updated"
    p.appendChild(spanT)

    alertS.appendChild(p)

    var buttonDemo = document.createElement('div')
    buttonDemo.setAttribute('class','button-demo')
    buttonDemo.style.marginTop = "5%"

    var col1 = document.createElement('div')
    col1.setAttribute('class','col-sm-4')

    var col3 = document.createElement('div')
    col3.setAttribute('class','col-sm-4')
    col3.style.textAlign = "center"
    var infoBox3 = document.createElement('div')
    infoBox3.setAttribute('class','info-box bg-green hover-expand-effect')
    infoBox3.setAttribute('id','seeAllArticles')
    var icon3 = document.createElement('div')
    icon3.setAttribute('class','icon')
    var materialIcon3 = document.createElement('i')
    materialIcon3.setAttribute('class','material-icons')
    materialIcon3.innerText = "library_books"
    icon3.appendChild(materialIcon3)

    var content3 = document.createElement('div')
    content3.setAttribute('class','content')
    content3.style.padding = "9px 10px"
    var text3 = document.createElement('div')
    text3.setAttribute('class','text')
    text3.style.fontSize = "20px"
    text3.style.paddingTop = "5px"
    text3.innerText = "See All Articles"
    content3.appendChild(text3)

    infoBox3.appendChild(icon3)
    infoBox3.appendChild(content3)
    col3.appendChild(infoBox3)

    var col4 = document.createElement('div')
    col4.setAttribute('class','col-sm-4')

    buttonDemo.appendChild(col1)
    buttonDemo.appendChild(col3)
    buttonDemo.appendChild(col4)

    containerFluid.appendChild(alertS)
    containerFluid.appendChild(buttonDemo)

    var mainContent = document.getElementsByClassName('content main')[0]
    mainContent.appendChild(containerFluid)

    var seeAllArticles = document.getElementById('seeAllArticles')
    seeAllArticles.addEventListener('click',function(){
        var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
        panggilAxiosArticles(API_URL)
    })
  }, 700);
}

	//fungsi tampilkan page berhasil tambah category
function addCategoryPlus(){

    clearContent()
    checkLoader()

    setTimeout(function() { 
      removeLoader()

    var containerFluid = document.createElement('div')
    containerFluid.setAttribute('class','container-fluid')
    //konten Title All Articles

    var alertS = document.createElement('div')
    alertS.setAttribute('class','alert alert-success')

    var p = document.createElement('p')
    p.style.fontSize = "20px"
    var strongs = document.createElement('strong')
    strongs.innerText = "Congrats!"
    p.appendChild(strongs)

    var spanT = document.createElement('span')
    spanT.innerText = " Your Article Category Has Been Succesfully Added"
    p.appendChild(spanT)

    alertS.appendChild(p)

    var buttonDemo = document.createElement('div')
    buttonDemo.setAttribute('class','button-demo')
    buttonDemo.style.marginTop = "5%"

    var col1 = document.createElement('div')
    col1.setAttribute('class','col-sm-4')


    var col3 = document.createElement('div')
    col3.setAttribute('class','col-sm-4')
    col3.style.textAlign = "center"
    var infoBox3 = document.createElement('div')
    infoBox3.setAttribute('class','info-box bg-green hover-expand-effect')
    infoBox3.setAttribute('id','seeAllCategories')
    var icon3 = document.createElement('div')
    icon3.setAttribute('class','icon')
    var materialIcon3 = document.createElement('i')
    materialIcon3.setAttribute('class','material-icons')
    materialIcon3.innerText = "library_books"
    icon3.appendChild(materialIcon3)

    var content3 = document.createElement('div')
    content3.setAttribute('class','content')
    content3.style.padding = "9px 10px"
    var text3 = document.createElement('div')
    text3.setAttribute('class','text')
    text3.style.fontSize = "20px"
    text3.style.paddingTop = "5px"
    text3.innerText = "See All Article Categories"
    content3.appendChild(text3)

    infoBox3.appendChild(icon3)
    infoBox3.appendChild(content3)
    col3.appendChild(infoBox3)

    var col4 = document.createElement('div')
    col4.setAttribute('class','col-sm-4')

    buttonDemo.appendChild(col1)
    buttonDemo.appendChild(col3)
    buttonDemo.appendChild(col4)

    containerFluid.appendChild(alertS)
    containerFluid.appendChild(buttonDemo)

    var mainContent = document.getElementsByClassName('content main')[0]
    mainContent.appendChild(containerFluid)

    var seeAllCategories = document.getElementById('seeAllCategories')
    seeAllCategories.addEventListener('click',function(){
        var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
        panggilAxiosCategories(API_URL)
    })
  }, 700);
}
	
	//fungsi tampilkan page berhasil add artikel
  function addArticlePlus(){

    clearContent()
    checkLoader()

    setTimeout(function() { 
      removeLoader()

    var containerFluid = document.createElement('div')
    containerFluid.setAttribute('class','container-fluid')
    //konten Title All Articles

    var alertS = document.createElement('div')
    alertS.setAttribute('class','alert alert-success')

    var p = document.createElement('p')
    p.style.fontSize = "20px"
    var strongs = document.createElement('strong')
    strongs.innerText = "Well Done!"
    p.appendChild(strongs)

    var spanT = document.createElement('span')
    spanT.innerText = " Your Article Has Been Succesfully Added"
    p.appendChild(spanT)

    alertS.appendChild(p)

    var buttonDemo = document.createElement('div')
    buttonDemo.setAttribute('class','button-demo')
    buttonDemo.style.marginTop = "5%"

    var col1 = document.createElement('div')
    col1.setAttribute('class','col-sm-2')

    var col2 = document.createElement('div')
    col2.setAttribute('class','col-sm-4')
    col2.style.textAlign = "center"
    var infoBox2 = document.createElement('div')
    infoBox2.setAttribute('class','info-box bg-brown hover-expand-effect')
    infoBox2.setAttribute('id','addAnother')
    var icon2 = document.createElement('div')
    icon2.setAttribute('class','icon')
    var materialIcon2 = document.createElement('i')
    materialIcon2.setAttribute('class','material-icons')
    materialIcon2.innerText = "library_add"
    icon2.appendChild(materialIcon2)

    var content2 = document.createElement('div')
    content2.setAttribute('class','content')
    content2.style.padding = "9px 10px"
    var text2 = document.createElement('div')
    text2.setAttribute('class','text')
    text2.style.fontSize = "21px"
    text2.style.marginTop = "0.5px"
    text2.innerText = "Add Another Article"
    content2.appendChild(text2)

    infoBox2.appendChild(icon2)
    infoBox2.appendChild(content2)
    col2.appendChild(infoBox2)


    var col3 = document.createElement('div')
    col3.setAttribute('class','col-sm-4')
    col3.style.textAlign = "center"
    var infoBox3 = document.createElement('div')
    infoBox3.setAttribute('class','info-box bg-green hover-expand-effect')
    infoBox3.setAttribute('id','seeAllArticles')
    var icon3 = document.createElement('div')
    icon3.setAttribute('class','icon')
    var materialIcon3 = document.createElement('i')
    materialIcon3.setAttribute('class','material-icons')
    materialIcon3.innerText = "library_books"
    icon3.appendChild(materialIcon3)

    var content3 = document.createElement('div')
    content3.setAttribute('class','content')
    content3.style.padding = "9px 10px"
    var text3 = document.createElement('div')
    text3.setAttribute('class','text')
    text3.style.fontSize = "20px"
    text3.style.paddingTop = "5px"
    text3.innerText = "See All Articles"
    content3.appendChild(text3)

    infoBox3.appendChild(icon3)
    infoBox3.appendChild(content3)
    col3.appendChild(infoBox3)

    var col4 = document.createElement('div')
    col4.setAttribute('class','col-sm-2')

    buttonDemo.appendChild(col1)
    buttonDemo.appendChild(col2)
    buttonDemo.appendChild(col3)
    buttonDemo.appendChild(col4)

    containerFluid.appendChild(alertS)
    containerFluid.appendChild(buttonDemo)

    var mainContent = document.getElementsByClassName('content main')[0]
    mainContent.appendChild(containerFluid)

    var addAnother = document.getElementById('addAnother')
    addAnother.addEventListener('click',function(){
      var API_URLs = "https://bookmarks-apis.herokuapp.com/api/article-categories/";
      axios
        .get(API_URLs)
        .then(formAddArticle)
        .catch(tampungError);
    })

    var seeAllArticles = document.getElementById('seeAllArticles')
    seeAllArticles.addEventListener('click',function(){
        var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
        panggilAxiosArticles(API_URL)
    })
  }, 700);
}

	//fungsi tampilkan list artikel
  function listArticleAct(response) {
    clearContent()
    var data = response.data
    checkLoader()
    setTimeout(function() { 
      removeLoader()
      
      var containerFluid = document.createElement('div')
      containerFluid.setAttribute('class','container-fluid')
      //konten Title All Articles

      var blockHeader = document.createElement('div')
      blockHeader.setAttribute('class','block-header')
      blockHeader.style.textAlign = "center"

      var h2Block = document.createElement('h2')
      h2Block.style.fontWeight = "bold"
      h2Block.style.fontSize = "24px"
      h2Block.innerText = "ALL ARTICLES"

      var small=document.createElement('small')
      small.innerText = "taken from"
      var aSmall = document.createElement('a')
      aSmall.setAttribute('href',"https://bookmarks-apis.herokuapp.com/api/articles/")
      aSmall.innerText = " https://bookmarks-apis.herokuapp.com/api/articles/"
      small.appendChild(aSmall)

      blockHeader.appendChild(h2Block)
      blockHeader.appendChild(small)

      //----------------------------------------

      //konten All Articles

      var rowClearFix =document.createElement('div')
      rowClearFix.setAttribute('class','row clearfix')

      var manyCol = document.createElement('div')
      manyCol.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')

      var card = document.createElement('div')
      card.setAttribute('class','card')

      var row = document.createElement('div')
      row.setAttribute('class','row')

      var bodyTable = document.createElement('div')
      bodyTable.setAttribute('class','body')
      var tableRes = document.createElement('div')
      tableRes.setAttribute('class','table-responsive')
      var tableID = document.createElement('table')
      tableID.setAttribute('class','table')
      tableID.setAttribute('id','tbodybody')


      var tbody = document.createElement('tbody')
      tbody.setAttribute('id','tbodytable')
      // var tr = document.createElement('tr');
      // var td = document.createElement('td');
      // td.innerText = "tes";
      var theadTop = document.createElement('thead')
      
      var trTop=document.createElement('tr')
      var thTop = document.createElement('th')
      thTop.setAttribute('colspan','4')
      var thMid = document.createElement('th')
      thMid.setAttribute('colspan','1')
      var thAdd = document.createElement('th')
      thAdd.setAttribute('colspan','4')

      var infoAddArticle = document.createElement('div')
      infoAddArticle.setAttribute('class','info-box bg-green hover-expand-effect')
      infoAddArticle.setAttribute('id','addArticle')
      var icon = document.createElement('div')
      icon.setAttribute('class','icon')
      var imat = document.createElement('i')
      imat.setAttribute('class','material-icons')
      imat.innerText="library_add"
      var content = document.createElement('div')
      content.setAttribute('class','content')
      var text=document.createElement('div')
      text.setAttribute('class','text')
      text.innerText = "Add Article"
      icon.appendChild(imat)
      content.appendChild(text)
      infoAddArticle.appendChild(icon)
      infoAddArticle.appendChild(content)

      var group = document.createElement('div')
      group.setAttribute('class','form-group')
      var line = document.createElement('div')
      line.setAttribute('class','form-line')
      var input = document.createElement('input')
      input.setAttribute('class','form-control')
      input.style.marginTop = "20px"
      input.setAttribute('placeholder','Search for article titles/categories & press enter...')
      input.setAttribute('id','searchID')
      line.appendChild(input)
      group.appendChild(line)
      
      
      thTop.appendChild(group)
      thAdd.appendChild(infoAddArticle)
      trTop.appendChild(thTop)
      trTop.appendChild(thMid)
      trTop.appendChild(thAdd)
      theadTop.appendChild(trTop)

      var thead = document.createElement('thead')
      var tr=document.createElement('tr')
      
      var th1 = document.createElement('th')
      var th2 = document.createElement('th')
      var th3 = document.createElement('th')
      var th4 = document.createElement('th')
      var th5 = document.createElement('th')
      var th6 = document.createElement('th')
      var th7 = document.createElement('th')

      th7.setAttribute('colspan','3')
      th7.style.textAlign="center"

      th1.innerText = "Number"
      th2.innerText = "Article Title"
      th3.innerText = "Brief Description"
      th4.innerText = "Category"
      th5.innerText = "Created On"
      th6.innerText = "Last Update"
      th7.innerText = "View / Edit / Delete"

      tr.appendChild(th1)
      tr.appendChild(th2)
      tr.appendChild(th3)
      tr.appendChild(th4)
      tr.appendChild(th5)
      tr.appendChild(th6)
      tr.appendChild(th7)

      thead.appendChild(tr)

      var cnt=1;
      data.forEach(e => {
          var tr = document.createElement('tr');
          tr.setAttribute('class','TableRow')
          var td1 = document.createElement('td')
          var td2 = document.createElement('td')
          var td3 = document.createElement('td')
          var td4 = document.createElement('td')
          var td5 = document.createElement('td')
          var td6 = document.createElement('td')
          var td7 = document.createElement('td')
          var td8 = document.createElement('td')
          var td9 = document.createElement('td')


          td1.innerText = cnt;
          cnt++;
          td2.innerText = e.title;
          td3.innerHTML = e.description.substr(0,30)+" ...";
          td4.innerText = e.categories[0].title;
          td5.innerText = e.created;

          if(e.updated == undefined){
            td6.innerText = "Never Updated";
          }else{
            td6.innerText = e.updated;
          }
          
          var iconView = document.createElement('i')
          iconView.setAttribute('class','material-icons')
          iconView.innerText = "pageview"
          td7.appendChild(iconView)
          
          var iconEdit = document.createElement('i')
          iconEdit.setAttribute('class','material-icons')
          iconEdit.innerText = "mode_edit"
          td8.appendChild(iconEdit)
          
          
          var iconDelete = document.createElement('i')
          iconDelete.setAttribute('class','material-icons')
          iconDelete.innerText = "delete"
          td9.appendChild(iconDelete)

          td7.style.color = "green"
          td8.style.color = "orange"
          td9.style.color = "red"

          td7.style.textAlign="center"
          td7.style.cursor = "pointer"
          td8.style.textAlign="center"
          td8.style.cursor = "pointer"
          td9.style.textAlign="center"
          td9.style.cursor = "pointer"

          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
          tr.appendChild(td4)
          tr.appendChild(td5)
          tr.appendChild(td6)
          tr.appendChild(td7)
          tr.appendChild(td8)
          tr.appendChild(td9)

          tbody.appendChild(tr);

          td7.addEventListener('click',function(){
            var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+e._id+"/"
            panggilAxiosView(API_URL)
          })

          td8.addEventListener('click',function(){
            var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+e._id+"/"
            panggilAxiosEditArticle(API_URL)
          })

          td9.addEventListener('click',function(){
            var answer = confirm('Do you really want to delete article "'+e.title+'" ?');
            if (answer){
              var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+e._id+"/"
              axios
                .delete(API_URL)
                .then()
                .catch(tampungError);
              deleteArticlePlus()
            }
          })
      });

      tableID.appendChild(theadTop)
      tableID.appendChild(thead)
      tableID.appendChild(tbody)
      tableRes.appendChild(tableID)
      bodyTable.appendChild(tableRes)

      card.appendChild(bodyTable)
      manyCol.appendChild(card)
      rowClearFix.appendChild(manyCol)
      containerFluid.appendChild(blockHeader)
      containerFluid.appendChild(rowClearFix)

      var mainContent = document.getElementsByClassName('content main')[0]
      mainContent.appendChild(containerFluid)

      var search = document.getElementById('searchID')
      search.addEventListener('keydown',function(event){
        var target=event.target.value.trim().toLowerCase();
        var targetSearch = event.target.value.trim()
        var tr = document.getElementsByClassName('TableRow')
        if(event.keyCode == 13){
          var tampung =0 ;
          for(let index = 0 ;index<data.length; index++){
            var param1 = data[index].title.toLowerCase()
            var param2 = data[index].categories[0].title.toLowerCase()
            var trNotFound = document.getElementsByClassName('TableRow NotFound')[0]
            if (param1.indexOf(target)===-1 && param2.indexOf(target)===-1){
              tr[index].style.display = "none"
              tampung++

              //tampilkan pesan not found
              if (tampung == data.length){
                if (trNotFound){
                  trNotFound.style.display = ""
                }
              }
            }else{
              tr[index].style.display = ""

              //hapus pesan not found
              if (trNotFound){
                trNotFound.style.display = "none"
              }
            }
          }
          if(tampung == data.length){
            var tbodytableNot = document.getElementById('tbodytable')
            var trNotFounds = document.createElement('tr')
            trNotFounds.setAttribute('class','TableRow NotFound')
            var tdNotFound = document.createElement('td')
            tdNotFound.setAttribute('colspan','9')
            tdNotFound.innerText = 'Sorry, we cant find "'+targetSearch+'" in All Article Titles or Article Categories'
            tdNotFound.style.textAlign = "center"
            trNotFounds.appendChild(tdNotFound)
            
            var cariSebelum = document.getElementsByClassName('TableRow NotFound')[0]
            if (cariSebelum){
              cariSebelum.remove()
            }
            tbodytableNot.appendChild(trNotFounds)
          }
        }
      })

      var addArticleNew = document.getElementById('addArticle')
      addArticleNew.addEventListener('click',function(){
          var API_URLs = "https://bookmarks-apis.herokuapp.com/api/article-categories/";
          axios
            .get(API_URLs)
            .then(formAddArticle)
            .catch(tampungError);
      })
      
    }, 200);
    clearCKE()
  }
  
  //fungsi tampilkan list category
  function listCategoriesAct(response) {
    clearContent()
    var data = response.data
    checkLoader()
    setTimeout(function() {

      removeLoader()

      var containerFluid = document.createElement('div')
      containerFluid.setAttribute('class','container-fluid')

      var blockHeader = document.createElement('div')
      blockHeader.setAttribute('class','block-header')
      blockHeader.style.textAlign = "center"

      var h2Block = document.createElement('h2')
      h2Block.style.fontWeight = "bold"
      h2Block.style.fontSize = "24px"
      h2Block.innerText = "ALL CATEGORIES"

      var small=document.createElement('small')
      small.innerText = "taken from"
      var aSmall = document.createElement('a')
      aSmall.setAttribute('href',"https://bookmarks-apis.herokuapp.com/api/article-categories/")
      aSmall.innerText = " https://bookmarks-apis.herokuapp.com/api/article-categories/"
      small.appendChild(aSmall)

      blockHeader.appendChild(h2Block)
      blockHeader.appendChild(small)

      //----------------------------------------

      //konten All Articles

      var rowClearFix =document.createElement('div')
      rowClearFix.setAttribute('class','row clearfix')

      var manyCol = document.createElement('div')
      manyCol.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')

      var card = document.createElement('div')
      card.setAttribute('class','card')

      var row = document.createElement('div')
      row.setAttribute('class','row')

      var bodyTable = document.createElement('div')
      bodyTable.setAttribute('class','body')
      var tableRes = document.createElement('div')
      tableRes.setAttribute('class','table-responsive')
      var tableID = document.createElement('table')
      tableID.setAttribute('class','table')
      tableID.setAttribute('id','tbodybody')


      var tbody = document.createElement('tbody')
      tbody.setAttribute('id','tbodytable')
      // var tr = document.createElement('tr');
      // var td = document.createElement('td');
      // td.innerText = "tes";
      var theadTop = document.createElement('thead')
      
      var trTop=document.createElement('tr')
      var thTop = document.createElement('th')
      thTop.setAttribute('colspan','3')
      var thMid = document.createElement('th')
      thMid.setAttribute('colspan','1')
      var thAdd = document.createElement('th')
      thAdd.setAttribute('colspan','3')

      var infoAddArticle = document.createElement('div')
      infoAddArticle.setAttribute('class','info-box bg-green hover-expand-effect')
      infoAddArticle.setAttribute('id','addCategory')
      var icon = document.createElement('icon')
      icon.setAttribute('class','icon')
      var imat = document.createElement('i')
      imat.setAttribute('class','material-icons')
      imat.innerText="add"
      var content = document.createElement('div')
      content.setAttribute('class','content')
      var text=document.createElement('div')
      text.setAttribute('class','text')
      text.innerText = "Add Category"
      icon.appendChild(imat)
      content.appendChild(text)
      infoAddArticle.appendChild(icon)
      infoAddArticle.appendChild(content)

      var group = document.createElement('div')
      group.setAttribute('class','form-group')
      var line = document.createElement('div')
      line.setAttribute('class','form-line')
      var input = document.createElement('input')
      input.setAttribute('class','form-control')
      input.style.marginTop = "20px"
      input.setAttribute('placeholder','Search for category titles & press enter...')
      input.setAttribute('id','searchID')
      line.appendChild(input)
      group.appendChild(line)
      
      
      thTop.appendChild(group)
      thAdd.appendChild(infoAddArticle)
      trTop.appendChild(thTop)
      trTop.appendChild(thMid)
      trTop.appendChild(thAdd)
      theadTop.appendChild(trTop)

      var thead = document.createElement('thead')
      var tr=document.createElement('tr')
      
      var th1 = document.createElement('th')
      var th2 = document.createElement('th')
      var th3 = document.createElement('th')
      var th4 = document.createElement('th')
      var th5 = document.createElement('th')
      var th6 = document.createElement('th')

      th5.setAttribute('colspan','2')
      th5.style.textAlign="center"

      th1.innerText = "Number"
      th2.innerText = "Category Title"
      th3.innerText = "Created On"
      th4.innerText = "Last Update"
      th5.innerText = "Edit / Delete"

      tr.appendChild(th1)
      tr.appendChild(th2)
      tr.appendChild(th3)
      tr.appendChild(th4)
      tr.appendChild(th5)
      tr.appendChild(th6)

      thead.appendChild(tr)

      var cnt=1;
      data.forEach(e => {
          var tr = document.createElement('tr');
          tr.setAttribute('class','TableRow')
          var td1 = document.createElement('td')
          var td2 = document.createElement('td')
          var td3 = document.createElement('td')
          var td4 = document.createElement('td')
          var td5 = document.createElement('td')
          td5.style.cursor = "pointer"
          var td6 = document.createElement('td')
          td6.style.cursor = "pointer"
          var td7 = document.createElement('td')

          td1.innerText = cnt;
          cnt++;
          td2.innerText = e.title;
          td3.innerText = e.created
          var updated = e.updated
          if (updated == undefined){
            updated = "Never Updated"
          }
          td4.innerText = updated;

          var iconEdit = document.createElement('i')
          iconEdit.setAttribute('class','material-icons')
          iconEdit.innerText = "mode_edit"
          td5.appendChild(iconEdit)
          
          
          var iconDelete = document.createElement('i')
          iconDelete.setAttribute('class','material-icons')
          iconDelete.innerText = "delete"
          td6.appendChild(iconDelete)

          td5.style.color = "orange"
          td6.style.color = "red"

          td5.style.textAlign="right"
          td6.style.textAlign="left"

          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
          tr.appendChild(td4)
          tr.appendChild(td5)
          tr.appendChild(td6)
          tr.appendChild(td7)

          tbody.appendChild(tr);

          td5.addEventListener('click',function(){
            var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"+e._id+"/"
            panggilAxiosEditCategory(API_URL)
          })

          td6.addEventListener('click',function(){
            var answer = confirm('If you delete "'+e.title+'" category, it means you delete all articles that contain this category. \n \n Do you really want to delete this category ? ');
            if (answer){
              var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"+e._id+"/"
              axios
                .delete(API_URL)
                .then()
                .catch(tampungError);

                var API_URLs = "https://bookmarks-apis.herokuapp.com/api/articles?category="+e._id
                axios
                  .get(API_URLs)
                  .then(function(response){
                    var data = response.data
                    for (let index = 0; index<data.length; index++){
                      var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+data[index]._id+"/"
                      axios
                        .delete(API_URL)
                        .then()
                        .catch(tampungError);
                      }
                  })
                  .catch(tampungError);

              deleteCategoryPlus()
            }
          })
      });

      tableID.appendChild(theadTop)
      tableID.appendChild(thead)
      tableID.appendChild(tbody)
      tableRes.appendChild(tableID)
      bodyTable.appendChild(tableRes)

      card.appendChild(bodyTable)
      manyCol.appendChild(card)
      rowClearFix.appendChild(manyCol)
      containerFluid.appendChild(blockHeader)
      containerFluid.appendChild(rowClearFix)

      var mainContent = document.getElementsByClassName('content main')[0]
      mainContent.appendChild(containerFluid)

      var addCategory = document.getElementById('addCategory')
      addCategory.addEventListener('click',function(){
        var API_URLs = "https://bookmarks-apis.herokuapp.com/api/article-categories/";
          axios
            .get(API_URLs)
            .then(formAddCategories)
            .catch(tampungError);
      })

      var search = document.getElementById('searchID')
      search.addEventListener('keydown',function(event){
        var target=event.target.value.trim().toLowerCase();
        var targetSearch = event.target.value.trim()
        var tr = document.getElementsByClassName('TableRow')
        
        if(event.keyCode == 13){
          var tampung =0 ;
          for(let index = 0 ;index<data.length; index++){
            var param1 = data[index].title.toLowerCase()
            var trNotFound = document.getElementsByClassName('TableRow NotFound')[0]
            if (param1.indexOf(target)===-1){
              tr[index].style.display = "none"
              tampung++

              //tampilkan pesan not found
              if (tampung == data.length){
                if (trNotFound){
                  trNotFound.style.display = ""
                }
              }
            }else{
              tr[index].style.display = ""

              //hapus pesan not found
              if (trNotFound){
                trNotFound.style.display = "none"
              }
            }
          }
          if(tampung == data.length){
            var tbodytableNot = document.getElementById('tbodytable')
            var trNotFounds = document.createElement('tr')
            trNotFounds.setAttribute('class','TableRow NotFound')
            var tdNotFound = document.createElement('td')
            tdNotFound.setAttribute('colspan','6')
            tdNotFound.style.textAlign="center"
            tdNotFound.innerText = 'Sorry, we cant find "'+targetSearch+'" in All Category Titles'
            trNotFounds.appendChild(tdNotFound)
            
            var cariSebelum = document.getElementsByClassName('TableRow NotFound')[0]
            if (cariSebelum){
              cariSebelum.remove()
            }
            tbodytableNot.appendChild(trNotFounds)
          }
        }
      })

      
    }, 200);
  }
	
	
	//fungsi tampilkan form add kategory
  function formAddCategories(response){
    clearContent()
    checkLoader()
    var data = response.data
    setTimeout(function() {

    removeLoader()

    var containerFluid = document.createElement('div')
    containerFluid.setAttribute('class','container-fluid')

    var blockHeader = document.createElement('div')
    blockHeader.setAttribute('class','block-header')
    blockHeader.style.textAlign = "center"

    var h2Block = document.createElement('h2')
    h2Block.style.fontWeight = "bold"
    h2Block.style.fontSize = "24px"
    h2Block.innerText = "ADD ARTICLE CATEGORY"

    var small = document.createElement('small')
    var aSmall = document.createElement('a')
    aSmall.setAttribute('href',"https://bookmarks-apis.herokuapp.com/api/article-categories/")
    aSmall.innerText = " https://bookmarks-apis.herokuapp.com/api/article-categories/"

    small.innerText = "Taken From "
    small.appendChild(aSmall)
    blockHeader.appendChild(h2Block)
    blockHeader.appendChild(small)

    //

    var rowClearFix = document.createElement('div')
    rowClearFix.setAttribute('class','row clearfix')

    var column = document.createElement('div')
    column.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')

    var card = document.createElement('div')
    card.setAttribute('class','card')

    var body = document.createElement('div')
    body.setAttribute('class','body')

    var form = document.createElement('form')
    form.setAttribute('class','form-horizontal')
    form.setAttribute('id','form-add')

    var rowClearFix2 = document.createElement('div')
    rowClearFix2.setAttribute('class','row clearfix')
    var column21 = document.createElement('div')
    column21.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
    var label2 = document.createElement('label')
    label2.innerText = "Category Title : "
    column21.appendChild(label2)

    var column22 = document.createElement('div')
    column22.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
    var formGroup2 = document.createElement('div')
    formGroup2.setAttribute('class','form-group title')
    var formLine2 = document.createElement('div')
    formLine2.setAttribute('class','form-line title')
    var input2 = document.createElement('input')
    input2.setAttribute('class','form-control title')
    input2.setAttribute('type','text')
    input2.setAttribute('id','title')
    input2.setAttribute('required','required')
    input2.setAttribute('placeholder','Article category must be unique*')
    formLine2.appendChild(input2)
    formGroup2.appendChild(formLine2)
    column22.appendChild(formGroup2)

    rowClearFix2.appendChild(column21)
    rowClearFix2.appendChild(column22)
    
    var rowClearFix5 = document.createElement('div')
    rowClearFix5.setAttribute('class','row clearfix')
    var column51 = document.createElement('div')
    column51.setAttribute('class','col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5')

    var button6 = document.createElement('button')
    button6.setAttribute('type','button')
    button6.setAttribute('class','btn btn-warning m-t-15')
    button6.setAttribute('id','back')
    button6.style.width="225px"
    button6.style.fontSize="16px"
    button6.innerText = "See All Article Categories"

    var button5 = document.createElement('button')
    button5.setAttribute('type','submit')
    button5.setAttribute('class','btn btn-success m-t-15')
    button5.setAttribute('id','tambahtambah')
    button5.style.width="225px"
    button5.style.fontSize="16px"
    button5.style.marginLeft = "50px"
    button5.innerText = "Add Article Category"


    column51.appendChild(button6)
    column51.appendChild(button5)
    
    rowClearFix5.appendChild(column51)

    form.appendChild(rowClearFix2)
    form.appendChild(rowClearFix5)

    body.appendChild(form)
    card.appendChild(body)
    column.appendChild(card)
    rowClearFix.appendChild(column)
    
    containerFluid.appendChild(blockHeader)
    containerFluid.appendChild(rowClearFix)
    
    var section = document.getElementsByClassName('content main')[0]
    section.appendChild(containerFluid)

    var back = document.getElementById('back')
    back.addEventListener('click',function(){
      var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
        panggilAxiosCategories(API_URL)
    })

    var tambah = document.getElementById("form-add");
    tambah.addEventListener("submit", function(event) {
        var tampung=0;
        for( var totalCategories = 0 ;totalCategories<data.length;totalCategories++){
          var judul = document.getElementById('title').value
          if (data[totalCategories].title.toLowerCase() == judul.toLowerCase()){
            tampung++;
          }
        }
        if(tampung == 0){
          var answer = confirm("Do you really want to add this article category ?");
          if (answer) {
            var judul = document.getElementById('title').value
            var categoryUrl = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
            axios
            .post(categoryUrl, {
              title: judul
            })
            .then()
            .catch(tampungError);
            
            addCategoryPlus();
            event.preventDefault()
          }else{
            event.preventDefault()
          }
        }else{
          alert("Sorry, this category title already exists")
          event.preventDefault()
        }
    });
  }, 200);
}
	
	//fungsi tampilkan form add artikel
  function formAddArticle(response){
    clearContent()
    checkLoader()
    var data = response.data
    setTimeout(function() {

    removeLoader()

    var containerFluid = document.createElement('div')
    containerFluid.setAttribute('class','container-fluid')

    var blockHeader = document.createElement('div')
    blockHeader.setAttribute('class','block-header')
    blockHeader.style.textAlign = "center"

    var h2Block = document.createElement('h2')
    h2Block.style.fontWeight = "bold"
    h2Block.style.fontSize = "24px"
    h2Block.innerText = "ADD ARTICLE FORM"

    var small = document.createElement('small')
    var aSmall = document.createElement('a')
    aSmall.setAttribute('href',"https://bookmarks-apis.herokuapp.com/api/articles/")
    aSmall.innerText = " https://bookmarks-apis.herokuapp.com/api/articles/"

    small.innerText = "Taken From "
    small.appendChild(aSmall)
    blockHeader.appendChild(h2Block)
    blockHeader.appendChild(small)

    //

    var rowClearFix = document.createElement('div')
    rowClearFix.setAttribute('class','row clearfix')

    var column = document.createElement('div')
    column.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')

    var card = document.createElement('div')
    card.setAttribute('class','card')

    var body = document.createElement('div')
    body.setAttribute('class','body')

    var form = document.createElement('form')
    form.setAttribute('class','form-horizontal')
    form.setAttribute('id','form-add')

    var rowClearFix2 = document.createElement('div')
    rowClearFix2.setAttribute('class','row clearfix')
    var column21 = document.createElement('div')
    column21.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
    var label2 = document.createElement('label')
    label2.innerText = "Article Title : "
    column21.appendChild(label2)

    var column22 = document.createElement('div')
    column22.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
    var formGroup2 = document.createElement('div')
    formGroup2.setAttribute('class','form-group title')
    var formLine2 = document.createElement('div')
    formLine2.setAttribute('class','form-line title')
    var input2 = document.createElement('input')
    input2.setAttribute('class','form-control title')
    input2.setAttribute('type','text')
    input2.setAttribute('id','title')
    input2.setAttribute('required','required')
    formLine2.appendChild(input2)
    formGroup2.appendChild(formLine2)
    column22.appendChild(formGroup2)

    rowClearFix2.appendChild(column21)
    rowClearFix2.appendChild(column22)

    //

    var rowClearFix3 = document.createElement('div')
    rowClearFix3.setAttribute('class','row clearfix')
    var column31 = document.createElement('div')
    column31.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
    var label3 = document.createElement('label')
    label3.innerText = "Article Category : "
    column31.appendChild(label3)

    var column32 = document.createElement('div')
    column32.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
    var formGroup3 = document.createElement('div')
    formGroup3.setAttribute('class','form-group')
    var formLine3 = document.createElement('div')
    formLine3.setAttribute('class','form-line')
    var select3 = document.createElement('select')
    select3.setAttribute('class','form-control show-tick')
    select3.setAttribute('id','category')
    select3.setAttribute('required','required')
    //loop
    var option3=document.createElement('option')
    option3.setAttribute('value','')
    option3.innerText="Select Category.."
    select3.appendChild(option3)
    //end

    
    
    for( var totalCategories = 0 ;totalCategories<data.length;totalCategories++){
      var titleOption = document.createElement('option')
      titleOption.setAttribute('value',data[totalCategories]._id)
      titleOption.innerText = data[totalCategories].title
      select3.appendChild(titleOption)
    }
    

    formLine3.appendChild(select3)
    formGroup3.appendChild(formLine3)
    column32.appendChild(formGroup3)

    rowClearFix3.appendChild(column31)
    rowClearFix3.appendChild(column32)

    // // 

    var rowClearFix4 = document.createElement('div')
    rowClearFix4.setAttribute('class','row clearfix')
    var column41 = document.createElement('div')
    column41.setAttribute('class','col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label')
    var label4 = document.createElement('label')
    label4.innerText = "Article Content : "
    column41.appendChild(label4)

    var column42 = document.createElement('div')
    column42.setAttribute('class','col-lg-10 col-md-10 col-sm-8 col-xs-7')
    var formGroup4 = document.createElement('div')
    formGroup4.setAttribute('class','form-group content')
    var formLine4 = document.createElement('div')
    formLine4.setAttribute('class','form-line content')
    
    var textArea4 = document.createElement('textarea')
    textArea4.setAttribute('id','isi')
    textArea4.setAttribute('class','form-control content')
    

    formLine4.appendChild(textArea4)
    formGroup4.appendChild(formLine4)
    column42.appendChild(formGroup4)

    rowClearFix4.appendChild(column41)
    rowClearFix4.appendChild(column42)
    var rowClearFix5 = document.createElement('div')
    rowClearFix5.setAttribute('class','row clearfix')
    var column51 = document.createElement('div')
    column51.setAttribute('class','col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5')

    var button6 = document.createElement('button')
    button6.setAttribute('type','button')
    button6.setAttribute('class','btn btn-warning m-t-15')
    button6.setAttribute('id','back')
    button6.style.width="200px"
    button6.style.fontSize="16px"
    button6.innerText = "See All Articles"

    var button5 = document.createElement('button')
    button5.setAttribute('type','submit')
    button5.setAttribute('class','btn btn-success m-t-15')
    button5.setAttribute('id','tambahtambah')
    button5.style.width="200px"
    button5.style.fontSize="16px"
    button5.style.marginLeft = "50px"
    button5.innerText = "Add Article"

    

    column51.appendChild(button6)
    column51.appendChild(button5)
    
    rowClearFix5.appendChild(column51)

    form.appendChild(rowClearFix2)
    form.appendChild(rowClearFix3)
    form.appendChild(rowClearFix4)
    form.appendChild(rowClearFix5)

    body.appendChild(form)
    card.appendChild(body)
    column.appendChild(card)
    rowClearFix.appendChild(column)
    
    containerFluid.appendChild(blockHeader)
    containerFluid.appendChild(rowClearFix)
    
    var section = document.getElementsByClassName('content main')[0]
    section.appendChild(containerFluid)
    
    var ckeEditor = document.createElement('script')
    ckeEditor.innerText = "CKEDITOR.replace('isi')"
    ckeEditor.setAttribute('id','ckeID')
    document.body.appendChild(ckeEditor)

    var back = document.getElementById('back')
    back.addEventListener('click',function(){
      var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
        panggilAxiosArticles(API_URL)
    })

    var tambah = document.getElementById("form-add");
    tambah.addEventListener("submit", function(event) {
      var answer = confirm("Do you really want to add this article ?");
      if (answer) {
        var judul = document.getElementById('title').value
        var kategori = document.getElementById('category').value
        
        var isi = CKEDITOR.instances["isi"].getData();
        var articleUrl = "https://bookmarks-apis.herokuapp.com/api/articles/"
        axios
        .post(articleUrl, {
          title: judul,
          description: isi,
          categories: [kategori]
        })
        .then()
        .catch(tampungError);
        

        // var allArticlesM = document.getElementById("allArticles");
        // allArticlesM.setAttribute('class','active')
        // var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
        
        addArticlePlus();
        event.preventDefault()
      }else{
        event.preventDefault()
      }
    });

    
  }, 200);
}
  var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles"
	
	//tampilkan loader
  loader()
  
	//tampilkan list artikel di awal2
  axios
  .get(API_URL)
  .then(listArticleAct)
  .catch(tampungError);

  //panggil detail artikel
  function panggilAxiosView(API_URL){
    axios
      .get(API_URL)
      .then(detailArticle)
      .catch(tampungError);
  }
  
  //panggil semua list artikel
  function panggilAxiosArticles(API_URL) {
    axios
      .get(API_URL)
      .then(listArticleAct)
      .catch(tampungError);
  }

   //panggil semua list category
  function panggilAxiosEditArticle(API_URL) {
    axios
      .get(API_URL)
      .then(editArticle)
      .catch(tampungError);
  }
  
  //panggil edit form category
  function panggilAxiosEditCategory(API_URL) {
    axios
      .get(API_URL)
      .then(editCategory)
      .catch(tampungError);
  }
	
  //panggil semua list category
  function panggilAxiosCategories(API_URL) {
    axios
      .get(API_URL)
      .then(listCategoriesAct)
      .catch(tampungError);
  }


	//tampilkan list category jika All Article Categories di klik
  var categoryId = document.getElementById("listCategories");
  categoryId.addEventListener("click", function() {
    var articles = document.getElementById('allArticles')
    articles.removeAttribute('class')
    categoryId.setAttribute('class','active')
    var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
    
    panggilAxiosCategories(API_URL);
  });

  //tampilkan list article jika All Articles di klik
  var allArticles = document.getElementById("allArticles");
  allArticles.addEventListener("click", function() {
    
      var categories = document.getElementById('listCategories')
      categories.removeAttribute('class')
      allArticles.setAttribute('class','active')
      var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"
      panggilAxiosArticles(API_URL);
    
  }, false);

  //tampilkan hasil pencarian all
  var searchAlls = document.getElementById('searchAlls')
  searchAlls.addEventListener('keydown',function(event){
    var target = event.target.value.trim().toLowerCase()
    var targetSearch = event.target.value.trim()
    if (event.keyCode == 13){
    clearContent()
    checkLoader()
      var API_URLss = "https://bookmarks-apis.herokuapp.com/api/articles/"
      axios
        .get(API_URLss)
        .then(function(responses){
          setTimeout(function() { 
            removeLoader()
            var data1=responses.data
            var containerFluid = document.createElement('div')
            containerFluid.setAttribute('class','container-fluid')
            //konten Title All Articles
      
            var blockHeader = document.createElement('div')
            blockHeader.setAttribute('class','block-header')
            blockHeader.style.textAlign = "center"
      
            var h2Block = document.createElement('h2')
            h2Block.style.fontWeight = "bold"
            h2Block.style.fontSize = "24px"
            if (targetSearch == ''){
              targetSearch = "Everything"
            }
            h2Block.innerText = 'Search "'+targetSearch+'" in All Articles'
      
            var small=document.createElement('small')
            small.innerText = "taken from"
            var aSmall = document.createElement('a')
            aSmall.setAttribute('href',"https://bookmarks-apis.herokuapp.com/api/articles/")
            aSmall.innerText = " https://bookmarks-apis.herokuapp.com/api/articles/"
            small.appendChild(aSmall)
      
            blockHeader.appendChild(h2Block)
            blockHeader.appendChild(small)
      
            //----------------------------------------
      
            //konten All Articles
      
            var rowClearFix =document.createElement('div')
            rowClearFix.setAttribute('class','row clearfix')
      
            var manyCol = document.createElement('div')
            manyCol.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')
      
            var card = document.createElement('div')
            card.setAttribute('class','card')
      
            var row = document.createElement('div')
            row.setAttribute('class','row')
      
            var bodyTable = document.createElement('div')
            bodyTable.setAttribute('class','body')
            var tableRes = document.createElement('div')
            tableRes.setAttribute('class','table-responsive')
            var tableID = document.createElement('table')
            tableID.setAttribute('class','table')
            tableID.setAttribute('id','tbodybody')
      
      
            var tbody = document.createElement('tbody')
            tbody.setAttribute('id','tbodytable')
            // var tr = document.createElement('tr');
            // var td = document.createElement('td');
            // td.innerText = "tes";
            
            var thTop = document.createElement('th')
            thTop.setAttribute('colspan','4')
            var thMid = document.createElement('th')
            thMid.setAttribute('colspan','1')
            var thAdd = document.createElement('th')
            thAdd.setAttribute('colspan','4')
      
            var thead = document.createElement('thead')
            var tr=document.createElement('tr')
            
            var th1 = document.createElement('th')
            var th2 = document.createElement('th')
            var th3 = document.createElement('th')
            var th4 = document.createElement('th')
            var th5 = document.createElement('th')
            var th6 = document.createElement('th')
            var th7 = document.createElement('th')
      
            th7.setAttribute('colspan','3')
            th7.style.textAlign="center"
      
            th1.innerText = "Number"
            th2.innerText = "Article Title"
            th3.innerText = "Brief Description"
            th4.innerText = "Category"
            th5.innerText = "Created On"
            th6.innerText = "Last Update"
            th7.innerText = "View / Edit / Delete"
      
            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th4)
            tr.appendChild(th5)
            tr.appendChild(th6)
            tr.appendChild(th7)
      
            thead.appendChild(tr)
      
            var cnt=1;
            var tampung1 = 0;
            data1.forEach(e => {
              if (e.title.toLowerCase().indexOf(target)===0){
                var tr = document.createElement('tr');
                tr.setAttribute('class','TableRow')
                var td1 = document.createElement('td')
                var td2 = document.createElement('td')
                var td3 = document.createElement('td')
                var td4 = document.createElement('td')
                var td5 = document.createElement('td')
                var td6 = document.createElement('td')
                var td7 = document.createElement('td')
                var td8 = document.createElement('td')
                var td9 = document.createElement('td')
                td1.innerText = cnt;
                cnt++;
                td2.innerText = e.title;
                td3.innerHTML = e.description.substr(0,30)+" ...";
                td4.innerText = e.categories[0].title;
                td5.innerText = e.created;
      
                if(e.updated == undefined){
                  td6.innerText = "Never Updated";
                }else{
                  td6.innerText = e.updated;
                }
                
                var iconView = document.createElement('i')
                iconView.setAttribute('class','material-icons')
                iconView.innerText = "pageview"
                td7.appendChild(iconView)
                
                var iconEdit = document.createElement('i')
                iconEdit.setAttribute('class','material-icons')
                iconEdit.innerText = "mode_edit"
                td8.appendChild(iconEdit)
                
                
                var iconDelete = document.createElement('i')
                iconDelete.setAttribute('class','material-icons')
                iconDelete.innerText = "delete"
                td9.appendChild(iconDelete)
      
                td7.style.color = "green"
                td8.style.color = "orange"
                td9.style.color = "red"
      
                td7.style.textAlign="center"
                td7.style.cursor = "pointer"
                td8.style.textAlign="center"
                td8.style.cursor = "pointer"
                td9.style.textAlign="center"
                td9.style.cursor = "pointer"
      
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tr.appendChild(td6)
                tr.appendChild(td7)
                tr.appendChild(td8)
                tr.appendChild(td9)
      
                tbody.appendChild(tr);
      
                td7.addEventListener('click',function(){
                  var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+e._id+"/"
                  panggilAxiosView(API_URL)
                })
      
                td8.addEventListener('click',function(){
                  var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+e._id+"/"
                  panggilAxiosEditArticle(API_URL)
                })
      
                td9.addEventListener('click',function(){
                  var answer = confirm('Do you really want to delete article "'+e.title+'" ?');
                  if (answer){
                    var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+e._id+"/"
                    axios
                      .delete(API_URL)
                      .then()
                      .catch(tampungError);
                    deleteArticlePlus()
                  }
                })
              }else{
                tampung1 ++;
              }
            });

            if (tampung1==data1.length){
              var tr = document.createElement('tr');
              tr.setAttribute('class','TableRow')
              var td1 = document.createElement('td')
              td1.setAttribute('colspan','9')
              td1.innerText = 'Sorry, we cant find "'+targetSearch+'" in All Article Titles'
              td1.style.textAlign = "center"
    
              tr.appendChild(td1)
    
              tbody.appendChild(tr);
            }
      
            tableID.appendChild(thead)
            tableID.appendChild(tbody)
            tableRes.appendChild(tableID)
            bodyTable.appendChild(tableRes)
      
            card.appendChild(bodyTable)
            manyCol.appendChild(card)
            rowClearFix.appendChild(manyCol)
            containerFluid.appendChild(blockHeader)
            containerFluid.appendChild(rowClearFix)
      
            var mainContent = document.getElementsByClassName('content main')[0]
            mainContent.appendChild(containerFluid)
            
          }, 100);
      })
      .catch(tampungError);

      var API_URLs = "https://bookmarks-apis.herokuapp.com/api/article-categories/"
      axios
        .get(API_URLs)
        .then(function(responses){
          setTimeout(function() { 
            var data=responses.data
            var containerFluid = document.createElement('div')
            containerFluid.setAttribute('class','container-fluid')
      
            var blockHeader = document.createElement('div')
            blockHeader.setAttribute('class','block-header')
            blockHeader.style.textAlign = "center"
      
            var h2Block = document.createElement('h2')
            h2Block.style.fontWeight = "bold"
            h2Block.style.fontSize = "24px"
            
            if (targetSearch == ''){
              targetSearch = "Everything"
            }
            h2Block.innerText = 'Search "'+targetSearch+'" in All Article Categories'
      
            var small=document.createElement('small')
            small.innerText = "taken from"
            var aSmall = document.createElement('a')
            aSmall.setAttribute('href',"https://bookmarks-apis.herokuapp.com/api/article-categories/")
            aSmall.innerText = " https://bookmarks-apis.herokuapp.com/api/article-categories/"
            small.appendChild(aSmall)
      
            blockHeader.appendChild(h2Block)
            blockHeader.appendChild(small)
      
            //----------------------------------------
      
            //konten All Articles
      
            var rowClearFix =document.createElement('div')
            rowClearFix.setAttribute('class','row clearfix')
      
            var manyCol = document.createElement('div')
            manyCol.setAttribute('class','col-lg-12 col-md-12 col-sm-12 col-xs-12')
      
            var card = document.createElement('div')
            card.setAttribute('class','card')
      
            var row = document.createElement('div')
            row.setAttribute('class','row')
      
            var bodyTable = document.createElement('div')
            bodyTable.setAttribute('class','body')
            var tableRes = document.createElement('div')
            tableRes.setAttribute('class','table-responsive')
            var tableID = document.createElement('table')
            tableID.setAttribute('class','table')
            tableID.setAttribute('id','tbodybody')
      
      
            var tbody = document.createElement('tbody')
            tbody.setAttribute('id','tbodytable')

            var thTop = document.createElement('th')
            thTop.setAttribute('colspan','3')
            var thMid = document.createElement('th')
            thMid.setAttribute('colspan','1')
            var thAdd = document.createElement('th')
            thAdd.setAttribute('colspan','3')
      
            var thead = document.createElement('thead')
            var tr=document.createElement('tr')
            
            var th1 = document.createElement('th')
            var th2 = document.createElement('th')
            var th3 = document.createElement('th')
            var th4 = document.createElement('th')
            var th5 = document.createElement('th')
            var th6 = document.createElement('th')
      
            th5.setAttribute('colspan','2')
            th5.style.textAlign="center"
      
            th1.innerText = "Number"
            th2.innerText = "Category Title"
            th3.innerText = "Created On"
            th4.innerText = "Last Update"
            th5.innerText = "Edit / Delete"
      
            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th4)
            tr.appendChild(th5)
            tr.appendChild(th6)
      
            thead.appendChild(tr)
      
            var cnt=1;
            var tampung2=0;
            data.forEach(e => {
              if (e.title.toLowerCase().indexOf(target)===0){
                var tr = document.createElement('tr');
                tr.setAttribute('class','TableRow')
                var td1 = document.createElement('td')
                var td2 = document.createElement('td')
                var td3 = document.createElement('td')
                var td4 = document.createElement('td')
                var td5 = document.createElement('td')
                td5.style.cursor = "pointer"
                var td6 = document.createElement('td')
                td6.style.cursor = "pointer"
                var td7 = document.createElement('td')
      
                td1.innerText = cnt;
                cnt++;
                td2.innerText = e.title;
                td3.innerText = e.created
                var updated = e.updated
                if (updated == undefined){
                  updated = "Never Updated"
                }
                td4.innerText = updated;
      
                var iconEdit = document.createElement('i')
                iconEdit.setAttribute('class','material-icons')
                iconEdit.innerText = "mode_edit"
                td5.appendChild(iconEdit)
                
                
                var iconDelete = document.createElement('i')
                iconDelete.setAttribute('class','material-icons')
                iconDelete.innerText = "delete"
                td6.appendChild(iconDelete)
      
                td5.style.color = "orange"
                td6.style.color = "red"
      
                td5.style.textAlign="right"
                td6.style.textAlign="left"
      
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tr.appendChild(td6)
                tr.appendChild(td7)
      
                tbody.appendChild(tr);
      
                td5.addEventListener('click',function(){
                  var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"+e._id+"/"
                  panggilAxiosEditCategory(API_URL)
                })
      
                td6.addEventListener('click',function(){
                  var answer = confirm('If you delete "'+e.title+'" category, it means you delete all articles that contain this category. \n \n Do you really want to delete this category ? ');
                  if (answer){
                    var API_URL = "https://bookmarks-apis.herokuapp.com/api/article-categories/"+e._id+"/"
                    axios
                      .delete(API_URL)
                      .then()
                      .catch(tampungError);

                      var API_URLs = "https://bookmarks-apis.herokuapp.com/api/articles?category="+e._id
                      axios
                        .get(API_URLs)
                        .then(function(response){
                          var data = response.data
                          for (let index = 0; index<data.length; index++){
                            var API_URL = "https://bookmarks-apis.herokuapp.com/api/articles/"+data[index]._id+"/"
                            axios
                              .delete(API_URL)
                              .then()
                              .catch(tampungError);
                            }
                        })
                        .catch(tampungError);

                    deleteCategoryPlus()
                  }
                })
              }else{
                tampung2++;
              }
            });
            
            if (tampung2==data.length){
              var tr = document.createElement('tr');
              tr.setAttribute('class','TableRow')
              var td1 = document.createElement('td')
              td1.setAttribute('colspan','9')
              td1.innerText = 'Sorry, we cant find "'+targetSearch+'" in All Article Categories'
              td1.style.textAlign = "center"
    
              tr.appendChild(td1)
    
              tbody.appendChild(tr);
            }

            tableID.appendChild(thead)
            tableID.appendChild(tbody)
            tableRes.appendChild(tableID)
            bodyTable.appendChild(tableRes)
      
            card.appendChild(bodyTable)
            manyCol.appendChild(card)
            rowClearFix.appendChild(manyCol)
            containerFluid.appendChild(blockHeader)
            containerFluid.appendChild(rowClearFix)
      
            var mainContent = document.getElementsByClassName('content main')[0]
            mainContent.appendChild(containerFluid)
            
          }, 150);
      })
      .catch(tampungError);
    }
  })
})();