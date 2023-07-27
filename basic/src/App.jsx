import './App.css'
import React from 'react'

import Mega2 from './components/mega/Mega2'
import Mega from './components/mega/Mega'
import Counter from './components/counter/Counter'
import Input from './components/form/Input'
import FatherIndirect from './components/comunication/FatherIndirect'
import FatherDirect from './components/comunication/FatherDirect'
import Userinfo from './components/conditional/UserInfo'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import ProductsTable from './components/repeat/ProductsTable'
import StudentList from './components/repeat/StudentList'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

export default () => (
    <div className="App">
        <h1>React Fundaments</h1>

        <div className="Cards">

            <Card title="#12 - Mega2" color="#F42A0A">
                <Mega2 qt={10}></Mega2>
            </Card>
            <Card title="#12 - Mega" color="#F42A0A">
                <Mega size={10}></Mega>
            </Card>
            <Card title="#12 - Counter" color="#566062">
                <Counter initialNumber={10}></Counter>
            </Card>
            <Card title="#11 - Controled Component (Input)" color="#FD33FF">
                <Input></Input>
            </Card>
            <Card title="#10 - Indirect Comunication" color="#8BAD39">
                <FatherIndirect></FatherIndirect>
            </Card>
            <Card title="#09 - Direct Comunication" color="#3A9DF9">
                <FatherDirect></FatherDirect>
            </Card>
            <Card title="#08 - Conditional Render" color="#3A9AD9">
                <EvenOrOdd number={20}></EvenOrOdd>
                <Userinfo user={{ name: 'Fernando'}}></Userinfo>
                <Userinfo user={{ email: 'Fernando@gmail.com'}}></Userinfo>
            </Card>

            <Card title="#07 - Product Table" color="#FF000">
                <ProductsTable></ProductsTable>
            </Card>

            <Card title="#06 - Repeat" color="#FF4C65">
                <StudentList></StudentList>
            </Card>

            <Card title="#05 - Componemt with Children" color="#56FF33">
                <Family surname="Oliveira">
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Carlos" />
                </Family>
            </Card>

            <Card title="#04 - Random Challenge" color="#DE3163">
                <Random min={10} max={100} />
            </Card>

            <Card title="#03 - Fragment" color="#40E0D0">
                <Fragment />
            </Card>

            <Card title="#02 - With Parameter" color="#800080">
                <WithParameter
                    titulo="Segundo componente"
                    subtitulo="Muito legal"
                    numero={9.3} />
            </Card>

            <Card title="#01 - First" color="#33C2FF">
                <First></First>
            </Card>
        </div>

    </div>
);
