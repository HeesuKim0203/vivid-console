import { helloWorld } from "npm-public-package-test"


test('Hello world function test', () => {

    expect(helloWorld()).toEqual('Hello World from my example modern npm package!')
    
})