let P = []; 
let t = [];
let r; //materi kelas: input user
let k; //tugas : r dan k input user
let P0  ;
let dt = 0.1;
let tMax = 10;

let grafik;

function setup() {
  createCanvas(400, 400);
  background(220,0,0);
  
  P0 = createInput();
  P0.position(1100, 650)
  let q = createP('Kondisi Awal')
  q.style ('fontsize','150px');
  q.position(1100, 615);

  r = createInput();
  r.position(740, 650)
  let p = createP('konstanta pertumbuhan')
  p.style ('fontsize','150px');
  p.position(740, 615);
 
  k = createInput();
  k.position(920, 650)
  let a = createP('carrying capacity')
  a.style ('fontsize','150px');
  a.position(920, 615);
  
  grafik = new Chart(this, config);
  
  solve();
 
  r.changed(solve);
  k.changed(solve);
  P0.changed(solve)
}

function draw() {
  background(220);
  grafik.update();
}




function solve(){
  let p12 = float(P0.value());
  P[0] = p12;
  t[0] = 0;
  let rs = float(r.value());
  let ks = float(k.value());
  let iterNum = int(tMax / dt);
  
  for  (i=0; i < iterNum; i++){
    P[i+1] = P[i] + dt * rs * P[i]*(1 - P[i]/ks)
    t[i+1] = (i + 1)*dt;
  }
}