import React, {useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import TestPage from '../pages/TestPage'
import ExamPageReading, {ExamPageListening, ExamPageWriting, ExamPageSpeaking}  from '../pages/ExamPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Result,{ResultPassage} from '../pages/Result'
import ProfilePage from '../pages/ProfilePage'
import AdminDashboard from '../pages/AdminDashboard'
import AdminSetDetail from '../pages/AdminSetDetail'
import AdminEditPageReading from '../pages/AdminEditPage'
import TestAnswerPage from '../pages/TestAnswerPage'
import ListTestPage from '../pages/ListTestPage'
const Routes = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    //   if (loading) return;
    //   if (!user) return history.push('/');
    //   fetchUser();
    }, []);
    return (
        <Switch>
            {/* Home */}
            <Route path='/' exact component={Home}/>
            <Route path='/home' exact component={Home}/>
            <Route path='/test' exact component={TestPage}/>
            <Route path='/test/list' exact component={ListTestPage}/>
            <Route path='/exam/reading'  component={ExamPageReading}/>
            <Route path='/exam/writing'  component={ExamPageWriting}/>
            <Route path='/exam/listening'  component={ExamPageListening}/>
            <Route path='/exam/speaking'  component={ExamPageSpeaking}/>
            <Route path='/exam/result'  component={Result}/>
            <Route path='/exam/resultpassage'  component={ResultPassage}/>
            <Route path='/login'  component={LoginPage}/>
            <Route path='/register'  component={RegisterPage}/>
            <Route path='/profile'  component={ProfilePage}/>
            <Route path='/admin/set'  component={AdminSetDetail}/>
            <Route path='/addtest/reading'  component={AdminEditPageReading}/>
            <Route path='/addtest/listening'  component={AdminEditPageReading}/>
            <Route path='/addtest/writing'  component={AdminEditPageReading}/>
            <Route path='/addtest/speaking'  component={AdminEditPageReading}/>
            <Route path='/admin/'  component={AdminDashboard}/>
            <Route path='/answer/'  component={TestAnswerPage}/>
        </Switch>
    )
}

export default Routes
