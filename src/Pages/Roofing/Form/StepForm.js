import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Address from './Steps/Address';
import Contact from './Steps/Contact';
import Final from './Steps/Final';
import Involveved from './Steps/Involveved';
import OwnHome from './Steps/OwnHome';
import PersonalInfo from './Steps/PersonalInfo';
import PlanStart from './Steps/PlanStart';
import Pnature from './Steps/Pnature';
import Windowmaterial from './Steps/Windowmaterial';
import ZipCode from './Steps/ZipCode';

const StepForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [page, setPage] = useState(0);
    const [AllData, setAllData] = useState({});
    const [nature, setNature] = useState();
    const [fault, setFault] = useState('yes');
    const [howner, setHowner] = useState('yes');
    const [timeFrame, setTimeFrame] = useState('yes');
    const [material, setMaterial] = useState();
    const [yes, no] = useState('yes');
    let tcpaText = "Please be advised that by clicking the Submit button, you are consenting to being contacted by a law firm at the phone number you provided. You are also consenting to receiving advertising and telemarketing messages via text message or pre-recorded call, which may be dialed by an autodialer. Please note that your consent is not necessary for a purchase, but standard message and data rates may apply. By clicking Submit, you are electronically signing to indicate your consent to being contacted and agreeing to the Terms and Conditions. Please be aware that submitting this form and any information contained therein does not establish an attorney-client relationship. The information provided may be reviewed by one or more attorneys and/or law firms. Additionally, please understand that any information received in response to this questionnaire is general information for which there will be no charge, and it should not be relied upon as legal advice because the law may vary from state to state. Therefore, you may need to contact local counsel for referral of this matter. By clicking Submit, you acknowledge that the information you have viewed is advertising and that you agree to receive future advertisements from Legal Justice Claim and/or its partners."

    const onSubmit = formData => {
        setLoading(true);

        const id = AllData?.first_name?.slice(0, 2) + AllData?.phone?.slice(4, 9) + AllData?.email?.slice(0, 3) + AllData?.last_name?.slice(0, 2) + formData?.zip_code?.slice(0, 4) + formData?.city?.slice(0, 2) + AllData?.phone?.slice(1, ) + formData.state?.slice(0, 1);

        const data = {
            ...AllData,
            lp_campaign_id: "12022",
            lp_supplier_id: "24637",
            lp_key: "mp12bxxmarmmx",
            ip_address: "229.222.220.248",
            api_key: "6309-24038-2x7h3zjbkzz6",
            trusted_form_cert_url: `https://cert.trustedform.com/${id}`,
            tcpa_text: tcpaText,
            tcpa: "No",
            email_address: formData.email_address,
            phone_home: formData.phone_home,
            window_project_type: nature,
            number_of_windows: fault,
            Service_id: material,
            home_owner: howner,
            time_frame: timeFrame,
            landing_page: 'https://mrhomeservice-com.preview-domain.com/roofing-campaign',
        }
        console.log(data, "so good")
        fetch('https://api.leadprosper.io/post', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                // if (!res.ok) {
                //     throw new Error(`HTTP error! status: ${res.status}`);
                // }
                return res.json();
            })
            .then(data => {
                if (data) {
                    toast.success('Successful post data');
                    reset();
                    setLoading(false)
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: data
                      })
                    // navigate("/thanks");
                    setPage(page + 1);
                } else if (data.errors) {
                    toast.error('Something went wrong', data.errors.message);
                    setLoading(false)
                }
                // console.log(data, "response data");
            })
            .catch(error => {
                // console.error(error);
                toast.error(`Error: ${error.message}`);
                setLoading(false);
            });
    }

      // console.log(AllData, "goods")
      const FormTitles = ["Physical Injury",
      "Currently Represented",
      "At Fault",
      "Incident Date",
      "Case Description",
      "Details",
      "Address",
      "Final",];
  const PageDisplay = () => {
      if (page === 0) {
          return <ZipCode setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
      } else if (page === 1) {
          return <PlanStart setTimeFrame={setTimeFrame} page={page} setPage={setPage} />;
      } else if (page === 2) {
          return <OwnHome setHowner={setHowner} page={page} setPage={setPage} />;
      } else if (page === 3) {
          return <PersonalInfo setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
      } else if (page === 4) {
          return <Contact setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
        } else if (page === 5) {
            return <Address onSubmit={onSubmit} setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
      } else {
          return <Final onSubmit={onSubmit} setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
      }
  };
  return (
    <div className='mx-auto rounded-2xl text-gray-900'>
    <div className="form  container ">
        <div className="progressbar">
        <div style={{ width: page === 0 ? "0%" : page == 1 ? "30%" : page == 2 ? "45%" : page == 3 ? "55%" : page == 4 ? "65%" : page == 5 ? "85%" : "100%" }}
            ></div>
        </div>
        <div className="form-container pb-5 sm:px-10 px-3 ">
            <div className="body ">{PageDisplay()}</div>
        </div>
    </div>
</div>
  )
}

export default StepForm