import { useState } from 'react';
import { Link, ListItem, Box } from '@mui/material';

interface HeaderItemProps {
  name: string;
  link: string;
  dropdownItems?: { name: string; link: string }[];
}

const HeaderItem = (props: HeaderItemProps) => {
  const { name, link, dropdownItems } = props;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ListItem sx={{ padding: '0 11px', position: 'relative' }}>
        <Link
          href={link}
          sx={{
            color: 'rgb(104, 104, 104)',
            fontSize: '14px',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          {name}
        </Link>

        {/* Dropdown menu */}
        {isDropdownOpen && dropdownItems && (
          <Box
            sx={{
              position: 'absolute',
              top: '100%',
              left: 0,
              background: '#fff',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '4px',
              padding: '20px 20px',
              zIndex: 9999,
              borderTop: '3px solid rgb(240, 240, 240)',
            }}
          >
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                sx={{
                  display: 'block',
                  padding: '5px 20px',
                  lineHeight: '2em',
                  color: 'rgb(104, 104, 104)',
                  fontSize: '14px',
                  width: '15em',
                  textDecoration: 'none',
                  '&:hover': { backgroundColor: '#f0f0f0' },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
        )}
      </ListItem>
    </Box>
  );
};
export default HeaderItem;
