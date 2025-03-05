import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/onBoardingForm'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/dist/server/api-utils'

const onBoarding = async() => {
    const {isOnboarded}= await getUserOnboardingStatus();

    if(isOnboarded){
        redirect("/dashboard");
    }
  return (
    <div>
      <OnboardingForm industries={industries} />
    </div>
  )
}

export default onBoarding;
