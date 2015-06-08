#include <Bridge.h>
#include <YunServer.h>
#include <YunClient.h>
#include <Servo.h>

YunServer server;
Servo servo1; // Create a servo object
Servo servo2; // Create a servo object

/**
 * Setup
 */
void setup() {
  servo1.attach(5); // Attaches the servo on Pin 5
  servo2.attach(6); // Attaches the servo on Pin 6
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
}

/**
 * Loop
 */
void loop() {

  YunClient client = server.accept();

  if (client) {
    process(client);
    client.stop();
  }

  delay(15);

}

void process(YunClient client) {
  String command = client.readStringUntil('/');

  // Check if the url contains the word "servo"
  if (command == "servo") {
    servoCommand(client);
  }

}

void servoCommand(YunClient client) {
  int pin, value;

  // Get the servo Pin (5 or 6)
  pin = client.parseInt();

  // Check if the url string contains a value (/servo/6/VALUE)
  if (client.read() == '/') {
    value = client.parseInt();

    if (pin == 5)
      servo1.write(value); // Rotate the servo 5
    else if (pin == 6)
      servo2.write(value); // Rotate the servo 6

  }

}

