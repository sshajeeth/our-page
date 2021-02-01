import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Who We Serve',
    paragraph: 'CodeChef serves businesses in all major sectors, providing exceptional software solutions for large corporations, mid-sized enterprises, and startups. We use industry-specific knowledge and custom-tailor our products to each customer\'s unique needs.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12 text-color-primary">
                  Finance and Insurance
                  </h3>
                <p className="m-0">
                We've designed and deployed smart, custom-built technology systems for financial and insurance industries. CodeChef's products always meet the highest security and quality standards.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/finance.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12 text-color-primary">
                  Healthcare
                  </h3>
                <p className="m-0">
                Our efficiency solutions for healthcare and life sciences organizations, including hospitals and pharmaceutical companies, meet rigorous compliance standards like HIPAA and other certifications.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/healthcare.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12 text-color-primary">
                  Construction
                  </h3>
                <p className="m-0">
                From the finances to the finish outs, our custom construction management solutions make it easy to track and manage the many facets of construction projects, including single-family homes, mixed-use condos, large office buildings, and everything in between.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/construction.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <h3 className="mt-0 mb-12 text-color-primary">
                  Wholesale and Retail
                  </h3>
                <p className="m-0">
                The CRM systems we have designed and supported handle comprehensive operations for wholesale and retail providers—inventory, invoicing, tracking, shipping, and more. CodeChef’s expert engineers can custom-build a system that fits and improves your existing business processes.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/shopping.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>  

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12 text-color-primary">
                  Transportation
                  </h3>
                <p className="m-0">
                From dispatching and job assignments to cargo tracking, ordering automation, and performance monitoring, CodeChefs’s custom solutions and applications add considerable value companies, working in the transportation and logistics industry.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/transportation.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <h3 className="mt-0 mb-12 text-color-primary">
                  Education
                  </h3>
                <p className="m-0">
                We're a little nerdy, so we know a lot about education. From e-learning and training portals to certification software, a custom CodeChef solution will add value for your students and organization.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/education.jpeg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>     

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;