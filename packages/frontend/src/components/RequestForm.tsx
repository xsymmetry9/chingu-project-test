'use client';

import {useRequestForm} from '@/src/utils/useRequestForm';
import Address from './Address';
import Contact from './Contact';
import Dates from './Dates';
import Confirmation from './Confirmation';
import FormTabs from './FormTabs';

const RequestForm = () =>{
    const {formTag, handlerTag, handleAddressSubmit, handleContactSubmit, handleDatesSubmit } = useRequestForm();
    return(
        <div className="bg-white w-[482px] max-w-[482px] py-[56px] px-[67px] max-h-[475px] space-y-8 relative">
        <FormTabs formTag={formTag} handlerTag={handlerTag} />
        {formTag === "address" && <Address onSubmit={handleAddressSubmit} />}
        {formTag === "contact" && <Contact onSubmit={handleContactSubmit} />}
        {formTag === "dates" && <Dates onSubmit={handleDatesSubmit} />}
        {formTag === "confirm" && <Confirmation />}
      </div>
    );
}

export default RequestForm;