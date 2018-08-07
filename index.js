class GreetingService {
    greet(name) {
        console.log(`Hello ${name}`);
    }
}

const greetingService = new GreetingService();
greetingService.greet('Manjula');
greetingService.greet('World');