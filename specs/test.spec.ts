
import 'mocha';
import { App } from '../src/app';
import chai = require('chai')
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
let app = new App();

describe('funciones api', () => {

  before(function(done){
    console.log('Iniciando server')
    app.listen();
    done();
  })

  it('prueba de ruta /test send array', function(done) {
    
    chai.request('http://localhost:3000')
      .post('/test')
      .send({
        "num": {
          "datos":[5,3,6,7,4]
        }
      })
      .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
  it('prueba de ruta /test send matriz', function(done) {
    
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "num": {
            "datos":[[5,3],[1,1]]
          }
        })
        .end( function(err,res){
          console.log(res.body)
          expect(res).to.have.status(200);
          done();
        });
    });

    it('prueba de ruta /test dividido en cero', function(done) {
    
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "num": {
            "datos":[5,3,6,0,4]
          }
        })
        .end( function(err,res){
          console.log(res.body)
          expect(res).to.have.status(200);
          done();
        });
    });
  
    it('prueba de ruta /test format error: no es un array', function(done) {
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "num": {
            "datos":5
          }
        })
        .end( function(err,res){
          console.log(res.body)
          expect(res).to.have.status(422);
          done();
        });
    });

    it('prueba de ruta /test format error: hay una letra en el arreglo', function(done) {
      chai.request('http://localhost:3000')
        .post('/test')
        .send({
          "num": {
            "datos":["a",3,2]
          }
        })
        .end( function(err,res){
          console.log(res.body)
          expect(res).to.have.status(422);
          done();
        });
    });
    
})