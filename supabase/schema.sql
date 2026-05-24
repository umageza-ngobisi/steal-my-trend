-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Products Table
create table if not exists public.products (
    id uuid primary key default uuid_generate_v4(),
    name text not null,
    image_url text,
    virality_score integer default 0,
    platform text not null,
    engagement integer default 0,
    growth_percentage numeric(5, 2) default 0.00,
    category text,
    description text,
    created_at timestamptz default now()
);

-- Trends Table
create table if not exists public.trends (
    id uuid primary key default uuid_generate_v4(),
    name text not null,
    thumbnail_url text,
    virality_score integer default 0,
    platform text not null,
    engagement integer default 0,
    growth_percentage numeric(5, 2) default 0.00,
    category text,
    timestamp timestamptz default now(),
    created_at timestamptz default now()
);

-- Saved Products Table (Linking users to products)
create table if not exists public.saved_products (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references auth.users(id) on delete cascade not null,
    product_id uuid references public.products(id) on delete cascade not null,
    created_at timestamptz default now(),
    unique(user_id, product_id)
);

-- Enable RLS
alter table public.products enable row level security;
alter table public.trends enable row level security;
alter table public.saved_products enable row level security;

-- Policies for Products
create policy "Allow public read access to products"
    on public.products for select
    using (true);

create policy "Allow admin write access to products"
    on public.products for all
    using (auth.role() = 'service_role'); -- or specific admin user check

-- Policies for Trends
create policy "Allow public read access to trends"
    on public.trends for select
    using (true);

create policy "Allow admin write access to trends"
    on public.trends for all
    using (auth.role() = 'service_role');

-- Policies for Saved Products
create policy "Users can view their own saved products"
    on public.saved_products for select
    using (auth.uid() = user_id);

create policy "Users can save products"
    on public.saved_products for insert
    with check (auth.uid() = user_id);

create policy "Users can remove saved products"
    on public.saved_products for delete
    using (auth.uid() = user_id);

-- Indexes
create index if not exists products_category_idx on public.products (category);
create index if not exists products_platform_idx on public.products (platform);
create index if not exists trends_category_idx on public.trends (category);
create index if not exists trends_platform_idx on public.trends (platform);
create index if not exists saved_products_user_id_idx on public.saved_products (user_id);
