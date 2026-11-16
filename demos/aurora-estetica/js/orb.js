/* Orb perolado em WebGL puro (sem three.js): ~2 KB, renderiza em resolução reduzida e pausa com a aba oculta. */
function makeOrb(canvas){
 const gl=canvas.getContext("webgl",{alpha:true,premultipliedAlpha:true,antialias:false,powerPreference:"low-power"});if(!gl)return null;
 const vs="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
 const fs=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 res,pos;uniform float t,amp,hue,sc,rot;
void main(){
 vec2 uv=(gl_FragCoord.xy-.5*res)/min(res.x,res.y)*2.;vec2 p=(uv-pos)/sc;float r=length(p),a=atan(p.y,p.x);
 float w=sin(a*3.+t+rot)*sin(a*2.-t*1.2)*.6+sin(a*5.+t*.9-rot)*.14;float R=.8*(1.+amp*w*.48);float d=r/R;
 float e=smoothstep(1.,.985,d);if(e<=0.){gl_FragColor=vec4(0.);return;}
 float z=sqrt(max(1.-d*d,0.));vec3 N=vec3(p/R,z);N.xy+=.1*vec2(sin(p.y*4.+t+rot),cos(p.x*4.-t*1.1))*(1.-z*.5);N=normalize(N);
 float f=pow(1.-max(N.z,0.),1.8);vec3 c=.8+.2*cos(6.2832*(f*.9+N.y*.3+hue+vec3(0.,.1,.25)));
 vec3 col=mix(vec3(1.,.97,.95),c,clamp(f*1.1+.1,0.,1.));col+=.07*pow(max(dot(N,normalize(vec3(-.4,.6,.7))),0.),24.);
 gl_FragColor=vec4(col*e,e);}`;
 const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o};
 const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
 if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return null;gl.useProgram(pr);
 const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
 const la=gl.getAttribLocation(pr,"a");gl.enableVertexAttribArray(la);gl.vertexAttribPointer(la,2,gl.FLOAT,false,0,0);
 const U={};["res","pos","t","amp","hue","sc","rot"].forEach(k=>U[k]=gl.getUniformLocation(pr,k));
 let W=1,H=1,nar=false;
 function resize(){nar=innerWidth<768;const q=nar?.5:.75,d=Math.min(devicePixelRatio||1,1.5);W=Math.max(2,Math.round(innerWidth*d*q));H=Math.max(2,Math.round(innerHeight*d*q));canvas.width=W;canvas.height=H;gl.viewport(0,0,W,H)}
 resize();addEventListener("resize",resize);
 function render(S,ms){const m=Math.min(W,H),asp=H/m;
  gl.uniform2f(U.res,W,H);gl.uniform1f(U.t,ms*.0006);gl.uniform1f(U.amp,S.amp);gl.uniform1f(U.hue,S.hue);gl.uniform1f(U.rot,S.rot);
  gl.uniform1f(U.sc,S.s*(nar?1.15:1));gl.uniform2f(U.pos,nar?0:S.x*1.32,nar?asp*.5:-S.my*.33);
  gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}
 return{render}
}
