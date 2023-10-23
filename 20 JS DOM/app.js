function createBox(title, content, linkURL) {
    //box ucun lazim olanlar
    let box = document.createElement("div");
    box.className = "box col-md-4";
    
    let imgBox = document.createElement("div");
    imgBox.className = "imgbox2";
    box.appendChild(imgBox);
    
    let measure = document.createElement("span")
    measure.innerText = "290 X 180px"
    imgBox.appendChild(measure)
   
    let boxTitle = document.createElement("div");
    boxTitle.className = "boxTitle";
    box.appendChild(boxTitle);
    
    let h1 = document.createElement("h5");
    h1.innerText = title;
    boxTitle.appendChild(h1);
    
    let p = document.createElement("p");
    p.innerText = content;
    boxTitle.appendChild(p);
    
    let link = document.createElement("div");
    link.className = "link";
    boxTitle.appendChild(link);
    
    let a = document.createElement("a");
    a.innerText = "Read more";
    a.setAttribute("target", "_blank");
    a.href = linkURL;
    link.appendChild(a);
    
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-arrow-right";
    a.appendChild(icon);
    
    return box;
  }
  
  function jsTemplate() {
    let section = document.createElement("section");
    section.id = "section";
  
    let containerDiv = document.createElement("div");
    containerDiv.className = "container";
    section.appendChild(containerDiv);
   //1ci hisse
    let rowDiv2 = document.createElement("div");
    rowDiv2.className = "row";
    containerDiv.appendChild(rowDiv2);

    let headBox = document.createElement("div")
    headBox.className = "headBox"
    rowDiv2.appendChild(headBox)

    let span =  document.createElement("span")
    span.innerText = "960 X 360px"
    headBox.appendChild(span)
    //1ci hisse bitti

    //box olan hisse basladi
    let rowDiv = document.createElement("div");
    rowDiv.className = "row p-0";
    containerDiv.appendChild(rowDiv);
  
    let blog = document.createElement("div");
    blog.className = "blog";
    rowDiv.appendChild(blog);
  
    //box lar ucun dovr
    for (let i = 0; i < 3; i++) {
      let box = createBox(
        "Indonectetus facilis ",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, qui. ",
        "https://www.google.com/"
      );
      blog.appendChild(box);
    }
  
    document.body.appendChild(section);
  }
  
  jsTemplate();
  
