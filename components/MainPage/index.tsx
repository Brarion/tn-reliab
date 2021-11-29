import Header from '@components/Header'
import Jumbotron from '@components/MainPage/components/Jumbotron'
import GroupCompany from '@components/MainPage/components/GroupCompany'
import Jobs from '@components/MainPage/components/Jobs'
import Contacts from '@components/MainPage/components/Contacts'

const MainPage = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <GroupCompany />
      <Jobs />
      <Contacts />
    </div>
  )
}

export default MainPage
