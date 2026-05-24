-- Seed data for Products
insert into public.products (id, name, image_url, virality_score, platform, engagement, growth_percentage, category, description)
values
    ('00000000-0000-0000-0000-000000000001', 'Crystal Galaxy Projector', 'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=800&auto=format&fit=crop&q=60', 94, 'TikTok', 1200000, 24.00, 'Home Improvement', 'Transform your room into a cosmic experience with this stunning galaxy projector.'),
    ('00000000-0000-0000-0000-000000000002', 'Minimalist Air Purifier', 'https://images.unsplash.com/photo-1585771724684-252702b6442e?w=800&auto=format&fit=crop&q=60', 88, 'Instagram', 850000, 15.00, 'Gadgets', 'Clean air meets sleek design. Perfect for modern living spaces.'),
    ('00000000-0000-0000-0000-000000000003', 'Portable Espresso Maker', 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&auto=format&fit=crop&q=60', 91, 'TikTok', 2400000, 42.00, 'Gadgets', 'Enjoy barista-quality espresso anywhere you go.'),
    ('00000000-0000-0000-0000-000000000004', 'Luminous Face Roller', 'https://images.unsplash.com/photo-1596462502278-27bfac44e016?w=800&auto=format&fit=crop&q=60', 82, 'Instagram', 420000, -5.00, 'Beauty', 'Elevate your skincare routine with this glowing face roller.'),
    ('00000000-0000-0000-0000-000000000005', 'Smart Pet Feeder', 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=60', 96, 'Facebook', 3100000, 68.00, 'Pets', 'Schedule meals and monitor your pet from your phone.'),
    ('00000000-0000-0000-0000-000000000006', 'Ergonomic Sleep Mask', 'https://images.unsplash.com/photo-1634568894173-58f001c9b68e?w=800&auto=format&fit=crop&q=60', 78, 'YouTube', 210000, 8.00, 'Fitness', 'The most comfortable sleep mask for deep, restorative rest.');

-- Seed data for Trends
insert into public.trends (id, name, thumbnail_url, virality_score, platform, engagement, growth_percentage, category, timestamp)
values
    ('00000000-0000-0000-0001-000000000001', 'Portable Neck Fan', 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400&h=400&fit=crop', 94, 'TikTok', 1200000, 125.00, 'gadgets', now() - interval '2 minutes'),
    ('00000000-0000-0000-0001-000000000002', 'Volcanic Stone Oil Roller', 'https://images.unsplash.com/photo-1596462502278-27bf8761e474?w=400&h=400&fit=crop', 89, 'Instagram', 450000, 85.00, 'beauty', now() - interval '5 minutes'),
    ('00000000-0000-0000-0001-000000000003', 'Resistance Band Set', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop', 78, 'TikTok', 89000, 45.00, 'fitness', now() - interval '12 minutes'),
    ('00000000-0000-0000-0001-000000000004', 'Self-Cleaning Cat Litter Box', 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop', 92, 'YouTube', 2100000, 150.00, 'pets', now() - interval '15 minutes'),
    ('00000000-0000-0000-0001-000000000005', 'Sunset Lamp', 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400&h=400&fit=crop', 85, 'TikTok', 750000, 60.00, 'home improvement', now() - interval '20 minutes'),
    ('00000000-0000-0000-0001-000000000006', 'Oversized Linen Shirt', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', 81, 'Instagram', 120000, 30.00, 'fashion', now() - interval '30 minutes'),
    ('00000000-0000-0000-0001-000000000007', 'Electric Spinach Peeler', 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&h=400&fit=crop', 72, 'Facebook', 300000, 110.00, 'gadgets', now() - interval '45 minutes'),
    ('00000000-0000-0000-0001-000000000008', 'Weighted Blanket', 'https://images.unsplash.com/photo-1583335512872-68c4a82b7b1c?w=400&h=400&fit=crop', 88, 'YouTube', 1500000, 55.00, 'home improvement', now() - interval '1 hour');
