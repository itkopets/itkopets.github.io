!function(){window.onload=function(){const e=document.querySelector(".fourth-container__carousel"),o=document.querySelector(".chosen-ingredient"),s=document.querySelector(".chosen-ingredient-content"),a=document.querySelectorAll(".ingredient1"),t=document.querySelectorAll(".ingredient2"),i=document.querySelectorAll(".ingredient3"),n=document.querySelectorAll(".ingredient4"),r=document.querySelector(".ingredient-dot1"),l=document.querySelector(".ingredient-dot2"),d=document.querySelector(".ingredient-dot3"),c=document.querySelector(".ingredient-dot4"),g=document.querySelector(".ingredient-img1"),m=document.querySelector(".ingredient-img2"),u=document.querySelector(".ingredient-img3"),L=document.querySelector(".ingredient-img4");for(var y=0;y<a.length;y++)a[y].onclick=function(){g.classList.remove("zoom"),g.classList.add("zoom-out"),m.classList.remove("zoom"),m.classList.add("zoom-out"),u.classList.remove("zoom"),u.classList.add("zoom-out"),L.classList.add("zoom"),L.classList.remove("zoom-out"),e.style.backgroundImage="url('./images/sangvinaria_big.png')",r.style.backgroundImage="url('./images/radio-active.png')",l.style.backgroundImage="url('./images/radio-disabled.png')",d.style.backgroundImage="url('./images/radio-disabled.png')",c.style.backgroundImage="url('./images/radio-disabled.png')",o.innerHTML="Сангвинария",s.innerHTML="Эффективна при приливах жара, учащённом сердцебиении, изменении сосудистого тонуса"};for(var y=0;y<t.length;y++)t[y].onclick=function(){g.classList.remove("zoom"),g.classList.add("zoom-out"),m.classList.remove("zoom"),m.classList.add("zoom-out"),u.classList.add("zoom"),u.classList.remove("zoom-out"),L.classList.remove("zoom"),L.classList.add("zoom-out"),e.style.backgroundImage="url('./images/ignaciya_big.png')",r.style.backgroundImage="url('./images/radio-disabled.png')",l.style.backgroundImage="url('./images/radio-active.png')",d.style.backgroundImage="url('./images/radio-disabled.png')",c.style.backgroundImage="url('./images/radio-disabled.png')",o.innerHTML="Игнация",s.innerHTML="Влияет на эмоциональное состояние женщины: устраняет раздражительность, улучшает сон."};for(var y=0;y<i.length;y++)i[y].onclick=function(){g.classList.remove("zoom"),g.classList.add("zoom-out"),m.classList.add("zoom"),m.classList.remove("zoom-out"),u.classList.remove("zoom"),u.classList.add("zoom-out"),L.classList.remove("zoom"),L.classList.add("zoom-out"),e.style.backgroundImage="url('./images/cymyfuga_big.png')",r.style.backgroundImage="url('./images/radio-disabled.png')",l.style.backgroundImage="url('./images/radio-disabled.png')",d.style.backgroundImage="url('./images/radio-active.png')",c.style.backgroundImage="url('./images/radio-disabled.png')",o.innerHTML="Цимицифуга",s.innerHTML="Эффективно устраняет  приливы жара, нормализует психоэмоциональный фон."};for(var y=0;y<n.length;y++)n[y].onclick=function(){g.classList.add("zoom"),g.classList.remove("zoom-out"),m.classList.remove("zoom"),m.classList.add("zoom-out"),u.classList.remove("zoom"),u.classList.add("zoom-out"),L.classList.remove("zoom"),L.classList.add("zoom-out"),e.style.backgroundImage="url('./images/sepia_big_new.png')",r.style.backgroundImage="url('./images/radio-disabled.png')",l.style.backgroundImage="url('./images/radio-disabled.png')",d.style.backgroundImage="url('./images/radio-disabled.png')",c.style.backgroundImage="url('./images/radio-active.png')",o.innerHTML="Сепия",s.innerHTML="Помогает при мигрени и сильных головных болях, замедляет образование пигментных пятен, способствует повышению резервов адаптации организма и обладает антивозрастным эффектом.<sup>2</sup>"};var y,b=document.getElementsByClassName("accordion");for(y=0;y<b.length;y++)b[y].addEventListener("click",function(){this.classList.toggle("active-acc");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});!function(){const e=document.querySelectorAll(".navmenu");for(var o=0;o<e.length;o++)e[o].addEventListener("click",function(){for(var o=0;o<e.length;o++)e[o].classList.remove("active");this.classList.add("active")})}()}}();