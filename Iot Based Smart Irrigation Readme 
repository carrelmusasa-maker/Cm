IoT-Based Smart Irrigation System - Deployment Guide

This guide provides step-by-step instructions on how to deploy and execute the source code for the IoT-based smart irrigation system using an ESP8266 microcontroller, Blynk IoT platform, and DHT11 sensor.

---

Table of Contents
1. [Prerequisites]
2. [Hardware Setup]
3. [Software Setup]
4. [Deploying the Code]
5. [Running the System]
6. [Troubleshooting]


---

Prerequisites
 Hardware
- ESP8266 microcontroller (e.g., NodeMCU)
- DHT11 temperature and humidity sensor
- Soil moisture sensor (analog)
- Relay module
- Water pump
- Jumper wires and breadboard
- Power supply (e.g., 5V adapter or battery)

 Software
- Arduino IDE (installed on your computer)
- Blynk app (installed on your smartphone)
- Required libraries:
  - 'ESP8266WiFi.h'
  - 'BlynkSimpleEsp8266.h'
  - 'DHT.h'

---

Hardware Setup
1. Connect the DHT11 Sensor:
   - Connect the 'VCC' pin of the DHT11 to '3V' on the ESP8266.
   - Connect the 'GND' pin of the DHT11 to 'G' on the ESP8266.
   - Connect the 'DATA' pin of the DHT11 to 'D4' on the ESP8266.

2. Connect the Soil Moisture Sensor:
   - Connect the 'VCC' pin of the soil moisture sensor to '3V' on the ESP8266.
   - Connect the 'GND' pin of the soil moisture sensor to 'G' on the ESP8266.
   - Connect the 'A0' pin of the soil moisture sensor to 'A0' on the ESP8266.

3. Connect the Relay Module:
   - Connect the 'VCC' pin of the relay to '3V' on the ESP8266.
   - Connect the 'GND' pin of the relay to 'G' on the ESP8266.
   - Connect the 'IN' pin of the relay to 'D5' on the ESP8266.

4. Connect the Water Pump:
   - Connect the water pump to the relay's 'NO' (Normally Open) and 'COM' (Common) terminals.
   - Ensure the pump is powered by an external power source (e.g., 5V adapter).

---

Software Setup
1. Install Arduino IDE:
   - Download and install the Arduino IDE from [arduino.cc](https://www.arduino.cc/en/software).

2. Install Required Libraries:
   - Open the Arduino IDE and go to 'Tools' > 'Manage Libraries'.
   - Search for and install the following libraries:
     - 'ESP8266 by ESP8266 Community'
     - 'Blynk'
     - 'DHT sensor library'

3. Set Up Blynk:
   - Download the Blynk app from the App Store or Google Play.
   - Create a new project in the Blynk app:
     - Set the device type to 'ESP8266'.
     - Copy the 'BLYNK_AUTH_TOKEN' from the app and replace 'YOUR_AUTH_TOKEN' in the code.
   - Add the following widgets to your Blynk dashboard:
     - 'Gauge' for temperature (Virtual Pin V0).
     - 'Gauge' for humidity (Virtual Pin V1).
     - 'Gauge' for soil moisture (Virtual Pin V3).
     - 'Button' for manual pump control (Virtual Pin V12).
     - 'Chart' for displaying soil moisture over time (Virtual Pin V3) 

---

Deploying the Code
1. Open the Code:
   - Copy the provided code into a new sketch in the Arduino IDE.

2. Modify the Code:
   - Replace the following placeholders with your actual credentials:
     - 'YOUR_TEMPLATE_ID'
     - 'YOUR_AUTH_TOKEN'
     - 'YOUR_WIFI_SSID'
     - 'YOUR_WIFI_PASSWORD'

3. Upload the Code:
   - Connect your ESP8266 to your computer via USB.
   - Select the correct board and port in the Arduino IDE:
     - Go to 'Tools' > 'Board' > 'NodeMCU 1.0 (ESP-12E Module)'.
     - Go to 'Tools' > 'Port' and select the appropriate port.
     - You can check Port by connecting and disconnecting USB to check one that appears and dissapear.
   - Click the 'Upload' button to upload the code to the ESP8266.

---

Running the System
1. Power On the System:
   - Power the ESP8266 using a USB cable or external power supply.

2. Monitor Serial Output:
   - Open the Serial Monitor in the Arduino IDE ('Tools' > 'Serial Monitor').
   - Set the baud rate to '115200'.
   - Verify that the ESP8266 connects to Wi-Fi and starts sending sensor data.

3. Control the System:
   - Use the Blynk app to monitor sensor data and manually control the water pump.

---

Troubleshooting
- Wi-Fi Connection Issues:
  - Ensure the Wi-Fi credentials are correct.
  - Check the signal strength of your Wi-Fi network.

- Sensor Readings Incorrect:
  - Verify the wiring of the sensors.
  - Ensure the sensors are properly calibrated.

- Pump Not Turning On/Off:
  - Check the relay connections and ensure the pump is powered.

