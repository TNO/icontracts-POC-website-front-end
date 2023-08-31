
# Intelligent Contracts: proof-of-concept website that uses the Onassis ontology

This repository details on work done on Intelligent Contracts in several TNO projects.

It contains front-end code for a proof of concept website that demonstrate use the of ontology in repository https://github.com/TNO/icontracts-onassis-ontology.

See repository https://github.com/TNO/icontracts-POC-website-back-end for the back-end part of this website. 

# Installation/Hosting instructions

```Use node 16```

command:
```nvm node 16```

```npm run serve ```

or

```Npm run build```

## Hosting using Docker

Use 
```docker-compose up --build```
and other docker commands together with https://github.com/onassisontology/icontracts_back_end/blob/main/docker-compose.yml 


# Front End user interface 
## Startpage

![overview2](example_ui_overview_2.PNG?raw=true "overview 2")

## Entered user details

Users: freelancer or client contractor, or legal expert

![overview](example_ui_overview.PNG?raw=true "overview")

## Answer contract template questions
User: Contractor
![overview](example_ui_contract_drafting_1.PNG?raw=true "overview ")

## Answer more contract template questions and additional questions
User: Contractor
![overview](example_ui_contract_drafting_2.PNG?raw=true "overview ")

## Evaluate answers and draft contract text
User: Legal expert
![overview](example_ui_evaluate_contract.PNG?raw=true "overview ")

## Evaluate risks, proactive controls, ask additional questions, evaluation additional answers (replies)
User: Legal expert
![overview](example_ui_evaluate_contract_risks_and_additional_questions.PNG?raw=true "overview ")

## Final contract overview
Users: Legal expert and contractors
![overview](example_ui_view_final_contract_data.PNG?raw=true "overview ")
