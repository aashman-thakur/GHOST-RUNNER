var ghost,tower,door,climber,gp,tp,dp,cp,dg,gs='play',s=0;

function preload(){
  gp=loadImage('ghost-standing.png')
  tp=loadImage('tower.png')
  dp=loadImage('door.png')
  cp=loadImage('climber.png')
  ss=loadSound('spooky.wav')
}

function setup(){
  createCanvas(500,500)
  tower=createSprite(width/2,height/2,20,20)
  tower.addImage(tp)
  tower.velocityY=3
  ghost=createSprite(width/2,250,20,20)
  ghost.addImage(gp)
  ghost.scale=0.3
  ghost.setCollider('rectangle',-40,145,100,10)
 ghost.debug=true  
 dg=new Group() 
 cg=new Group() 
  
}

function draw(){
  background('black')
  drawSprites()
  if(gs==='end'){
  var go=createSprite(250,250,500,500)
  go.shapeColor='black'
    fill('red')
    textSize(20)
    text('game over',200,250)
    text('your score:'+s,195,275)
  }
  if(gs==='play'){
    if(ghost.y>500){
     gs='end' 
    }
    if(frameCount%2===0){
      s=s+1
    }
    fill('black')
    textSize(20)
    text('score:'+s,100,20) 
  ghost.velocityY=ghost.velocityY+2
  if(tower.y>500){
    tower.y=tower.width/2
  }
  if(keyDown('space')){
    ghost.velocityY=-10
  }
  if(keyDown('left')){
    ghost.x=ghost.x-7
  }
  if(keyDown('right')){
    ghost.x=ghost.x+7                                   
  }
  r=Math.round(random(100,400))
  doors();
  if(ghost.isTouching(cg)){
  ghost.velocityY=0  
  }}
    
}
function doors(){
  if(frameCount%200===0){
    door=createSprite(r,-5,20,20)
    door.addImage(dp)
    door.velocityY=3
     climber=createSprite(r,door.y+50,20,20)
    climber.addImage(cp)
    climber.velocityY=3
    ghost.depth=door.depth+1
   dg.add(door)
   cg.add(climber)
   door.lifetime=200 
    climber.lifetime=200
}
}
