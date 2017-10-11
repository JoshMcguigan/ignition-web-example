# ignition-web-example

Ignition web example is a simple demo React application to illustrate the use of [ignition-web-scripts](https://github.com/JoshMcguigan/ignition-web-scripts) and [ignition-web-hoc](https://github.com/JoshMcguigan/ignition-web-hoc). 

## Setup

  1. Ensure you have setup Ignition and installed [ignition-web-scripts](https://github.com/JoshMcguigan/ignition-web-scripts) per the README 
  2. Create the following tag structure within the default tag provider for the 'api' project create in step 1
      * The nested structure can be created with either folders or UDTs
      * The tags should be float data type, but can be memory/expression/OPC tags based on your preference
  
            - Configuration
              - Inverters
                - Inverter Max Power
            - Inverters
              - Inverter 1
                - P
                - VAB
                - VBC
                - VCA
              - Inverter 2
                - P
                - VAB
                - VBC
                - VCA
              - Inverter 3
                - P
                - VAB
                - VBC
                - VCA
            - Air Temperature
            - Module Temperature
            - Irradiance
          
  2. (Optional) Fork the ignition-web-example repository
  3. Clone the repository onto your local machine
  4. Run 'npm install' in the directory of the cloned project
  5. Run 'npm run start' in the directory of the cloned project
  6. Open the application at http://localhost:3000
  
  
