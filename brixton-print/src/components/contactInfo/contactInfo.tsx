import { Box, Heading, Text } from "@chakra-ui/react";

const ContactInfo = () => {
  return (
    <Box width="80%">
      <Heading visual="two" px={0}>
        Contact Us.
      </Heading>
      <Text visual="two">
        At Brixton Print, we take pride in delivering high-quality printing
        solutions tailored to your unique needs. Whether you’re looking to
        create vibrant marketing materials, custom business stationery, or
        personalized invitations, our expert team is here to help every step of
        the way.
      </Text>
      <Heading visual="three">
        <b>Why Contact Us?</b>
      </Heading>
      <Box
        as="ul"
        fontSize="sm"
        listStylePosition="inside"
        listStyleType="circle"
      >
        <li>
          <Text visual="two" size="bold" as="span">
            Expert Guidance:
          </Text>
          <Text visual="two" as="span">
            We offer advice and creative solutions that bring your vision to
            life.
          </Text>
        </li>
        <li>
          <Text visual="two" size="bold" as="span">
            State-of-the-Art Technology:
          </Text>
          <Text visual="two" as="span">
            We use the latest printing technology to ensure your projects are
            produced with exceptional quality and precision.
          </Text>
        </li>
        <li>
          <Text visual="two" size="bold" as="span">
            Custom Solutions:
          </Text>
          <Text visual="two" as="span">
            From small print runs to large-scale production, we offer flexible
            services to meet your specific requirements.
          </Text>
        </li>
        <li>
          <Text visual="two" size="bold" as="span">
            Fast Turnaround:
          </Text>
          <Text visual="two" as="span">
            We understand deadlines. Our efficient processes ensure that your
            order is delivered on time, every time.
          </Text>
        </li>
      </Box>
      <Heading visual="three">
        <b>How To Reach Us?</b>
      </Heading>
      <Box
        as="ul"
        fontSize="sm"
        listStylePosition="inside"
        listStyleType="circle"
      >
        <li>
          <Text visual="one" size="bold" as="span">
            Email:
          </Text>
          <Text visual="one" as="span">
            info@brixton-print.com
          </Text>
        </li>
        <li>
          <Text visual="one" size="bold" as="span">
            Online:
          </Text>
          <Text visual="one" as="span">
            Use our contact form
          </Text>
        </li>
      </Box>
      <Text visual="two" size="bold" pt="2">
        We look forward to discussing your next project and providing you with
        outstanding printing services that make a lasting impression.
      </Text>
    </Box>
  );
};

export default ContactInfo;
