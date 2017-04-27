const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=>{
  
  describe('#add', ()=>{
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBeA('number').toBe(44);
    });  
    
    it('should async add two numbers',(done)=>{
    utils.asyncAdd(4,3,(sum)=>{
      expect(sum).toBeA('number').toBe(7);
      done();
    })
  });
  });
  
  
  it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBeA('number').toBe(9);
  });
  
  it('should set firstName and lastName', () => {
    var user = {location: 'Chicago', phone: 0000000000 };
    var res = utils.setName(user, 'Pavan Shetty');
  
    expect(res).toInclude({
      firstName: 'Pavan',
      lastName: 'Shetty'
    });
  });
  
  it('should expect some values', () => {
    
    expect(12).toBe(12);
    expect(12).toNotBe(11);
  
    expect({name: 'Andrew'})
      .toEqual({name: 'Andrew'});
    expect({name: 'andrew'})
      .toNotEqual({name: 'Andrew'});
    
    expect([2,3,4])
      .toInclude(2);
    expect([2,3,4])
      .toExclude(1);
    
    expect({
      name: 'Pavan',
      Phone: 0000,
      location: 'Chicago'
    }).toInclude({
      location: 'Chicago'
    })
    expect({
      name: 'Pavan',
      Phone: 0000,
      location: 'Chicago'
    }).toExclude({
      location: 'Bengaluru'
    })
  });
  
  
})

