let body=document.body,
loading=(console.log(body),document.querySelector(".loading"));loading.style.opacity=1,body.style.overflow="hidden",window.addEventListener("load",()=>{setInterval(()=>{loading.style.opacity=0,body.style.overflow="auto",loading.style.zIndex="0"},2e3)}),window.addEventListener("scroll",()=>{333<scrollY?document.getElementsByTagName("nav")[0].classList.add("new_nav"):document.getElementsByTagName("nav")[0].classList.remove("new_nav")});

$('.theam i').click(()=>{
    
    let width =$('.options').outerWidth() // return options width 
    console.log(width)
    console.log($('.theam').offset().left)
   
    if($('.theam').offset().left==0)
       $('.theam').animate({left:-width},1500);
    else
    $('.theam').animate({left:0},1500);

})

const colors=['#FA7070' ,'#D6D46D' ,'#4D4C7D','#1AACAC' ,'#ff7a57'];

for(let i=0; i<colors.length ;i++){
    $('.theam li').eq(i).css('backgroundColor',colors[i])
}
 
$('.theam li').click(function(){
   let theam = $(this).css('backgroundColor');
   console.log(theam)
   $(":root").attr("style",`--main-col:${theam}`)
})
