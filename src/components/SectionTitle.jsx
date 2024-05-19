import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-1/3 mx-auto text-center my-8'>
            <p className="text-[#D99904] mb-4">---{subHeading}---</p>
            <p className='text-4xl border-y-4 py-4 uppercase'>{heading}</p>
        </div>
    );
};

SectionTitle.propTypes={
    heading: PropTypes.string,
    subHeading: PropTypes.string
}
export default SectionTitle;