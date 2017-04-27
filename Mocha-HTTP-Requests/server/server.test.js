const request = require('supertest');
const expect = require('expect')

var app = require('./server').app;

describe('Server',()=>{
    
    describe('GET /',()=>{
        it('should redirect to homepage', (done)=>{
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello HTTP request')
                .end(done);
        })        
    });
    
    describe('GET /users',()=>{
        it('should include the user pavan', (done)=>{
           request(app)
                .get('/users')
                .expect(200) // Default status code used by express
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name:"pavan",
                        age:27
                })
            })
            .end(done);
        });    
    })
    
    
});
