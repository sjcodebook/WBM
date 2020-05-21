import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const PrivacyWrapper = styled.div`
  position: relative;
  padding: 90px 75px 0 75px;
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`

export const PrivacyDetails = styled.div`
  width: 870px;
  max-width: 100%;
  margin: 0 auto;

  h2 {
    font-size: 21px;
    font-weight: 500;
    color: ${themeGet('colors.textColor', '#292929')};
    margin-bottom: 40px;
    @media (max-width: 990px) {
      margin-bottom: 30px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
`
